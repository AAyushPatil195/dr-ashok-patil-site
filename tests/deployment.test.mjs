import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import * as zod from "zod";

// Exercise the actual TypeScript modules with isolated env and email mocks.
// No credentials, network requests or additional test dependencies are needed.
function loadModule(path, env = {}, imports = {}) {
  const { outputText } = ts.transpileModule(readFileSync(resolve(import.meta.dirname, "..", path), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const moduleRecord = { exports: {} };
  runInNewContext(outputText, {
    module: moduleRecord,
    exports: moduleRecord.exports,
    process: { env },
    URL,
    Response,
    console: { error() {} },
    require(name) {
      if (!(name in imports)) throw new Error(`Unexpected import: ${name}`);
      return imports[name];
    },
  }, { filename: path });
  return moduleRecord.exports;
}

const schema = loadModule("src/lib/enquiry-schema.ts", {}, { zod });
const mailEnv = {
  RESEND_API_KEY: "test-only-placeholder",
  ENQUIRY_EMAIL_FROM: "sender@example.invalid",
  ENQUIRY_EMAIL_TO: "recipient@example.invalid",
};
const validEnquiry = {
  name: "Deployment test",
  phone: "0000000000",
  email: "",
  preferredTime: "",
  message: "Synthetic deployment verification only.",
  website: "",
};

async function submit({ env = mailEnv, result, throws = false, payload = validEnquiry, malformed = false } = {}) {
  let sendCount = 0;
  const route = loadModule("src/app/api/enquiry/route.ts", env, {
    "@/lib/enquiry-schema": schema,
    resend: {
      Resend: class {
        emails = { send: async () => {
          sendCount++;
          if (throws) throw new Error("Simulated network failure");
          return result;
        } };
      },
    },
  });
  assert.equal(route.runtime, "nodejs");
  const response = await route.POST(new Request("https://example.invalid/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: malformed ? "{" : JSON.stringify(payload),
  }));
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  return { status: response.status, body: await response.json(), sendCount };
}

test("only provider acceptance with an email ID reports success", async () => {
  const response = await submit({ result: { data: { id: "synthetic-email-id" }, error: null } });
  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.match(response.body.message, /submitted for email delivery/);
  assert.equal(response.sendCount, 1);
});

for (const [name, options, status] of [
  ["provider rejection", { result: { data: null, error: { name: "validation_error" } } }, 502],
  ["provider error despite an ID", { result: { data: { id: "id" }, error: { name: "provider_error" } } }, 502],
  ["missing provider data", { result: { data: null, error: null } }, 502],
  ["missing email ID", { result: { data: {}, error: null } }, 502],
  ["empty email ID", { result: { data: { id: "" }, error: null } }, 502],
  ["unexpected provider response", {}, 500],
  ["network exception", { throws: true }, 500],
  ["honeypot", { payload: { ...validEnquiry, website: "spam" } }, 422],
  ["invalid enquiry", { payload: { ...validEnquiry, name: "" } }, 422],
  ["malformed JSON", { malformed: true }, 400],
]) {
  test(`${name} never reports success`, async () => {
    const response = await submit(options);
    assert.equal(response.status, status);
    assert.equal(response.body.success, false);
    if (status < 500) assert.equal(response.sendCount, 0);
  });
}

for (const key of Object.keys(mailEnv)) {
  test(`missing ${key} fails without sending`, async () => {
    const response = await submit({ env: { ...mailEnv, [key]: "" } });
    assert.equal(response.status, 503);
    assert.equal(response.body.success, false);
    assert.equal(response.sendCount, 0);
  });
}

function site(env) {
  return loadModule("src/lib/site-url.ts", env);
}

test("local and initial Netlify staging builds default to noindex", () => {
  assert.equal(site({}).getSiteUrl().origin, "http://localhost:3000");
  const staging = site({ NETLIFY: "true", CONTEXT: "production", URL: "https://clinic-test.netlify.app" });
  assert.equal(staging.getSiteUrl().origin, "https://clinic-test.netlify.app");
  assert.equal(staging.isIndexingEnabled(), false);
});

test("approved production URL drives canonicals and indexing", () => {
  const production = site({ CONTEXT: "production", NEXT_PUBLIC_SITE_URL: "https://drashokpatil.in/", NEXT_PUBLIC_SITE_INDEXING_ENABLED: "true" });
  assert.equal(production.getSiteUrl().origin, "https://drashokpatil.in");
  assert.equal(production.isIndexingEnabled(), true);
  assert.equal(site({ NEXT_PUBLIC_SITE_URL: "https://drashokpatil.in" }).isIndexingEnabled(), false);
  assert.equal(site({ NEXT_PUBLIC_SITE_INDEXING_ENABLED: "true" }).isIndexingEnabled(), false);
});

for (const context of ["deploy-preview", "branch-deploy"]) {
  test(`${context} uses its own canonical and stays noindex even with production settings`, () => {
    const preview = site({ NETLIFY: "true", CONTEXT: context, DEPLOY_PRIME_URL: "https://preview.netlify.app", NEXT_PUBLIC_SITE_URL: "https://drashokpatil.in", NEXT_PUBLIC_SITE_INDEXING_ENABLED: "true" });
    assert.equal(preview.getSiteUrl().origin, "https://preview.netlify.app");
    assert.equal(preview.isIndexingEnabled(), false);
  });
}

test("unsafe canonical origins and missing Netlify origins fail", () => {
  for (const url of ["http://drashokpatil.in", "https://example.invalid/path", "https://example.invalid/?query=1", "https://example.invalid/#fragment", "https://user:pass@example.invalid", "not-a-url"]) {
    assert.throws(() => site({ NEXT_PUBLIC_SITE_URL: url }).getSiteUrl());
  }
  assert.throws(() => site({ NETLIFY: "true" }).getSiteUrl());
  assert.throws(() => site({ NETLIFY: "true", NEXT_PUBLIC_SITE_URL: "http://localhost:3000" }).getSiteUrl());
});

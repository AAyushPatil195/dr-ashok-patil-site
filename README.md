# Dr. Ashok A. Patil

Next.js App Router website for Dr. Ashok A. Patil, General Practitioner in Shani Peth,
Jalgaon. Target: Netlify Free. Preferred production origin: `https://drashokpatil.in`,
subject to domain setup and launch approval.

## Development and verification

Use Node.js 24 (`.nvmrc`) and npm 10.8.2 (`packageManager` / `netlify.toml`).
The initial local checks used Node 24.21.0 / npm 10.8.1. The owner-supplied
Netlify log confirms Node 24.22.1 / npm 10.8.2 and a successful Linux Next.js
build, but no Next.js adapter execution. See the 404 repair notes below.

```bash
npm ci
# Copy .env.example to .env.local for local development only.
npm run dev
```

```bash
npm run lint
npm run typecheck
npm run test:deployment
npm run build
```

`npm run start` serves the production build locally. Netlify uses its adapter,
not a persistent `next start` process. No hosted deployment or browser verification
was performed during this readiness task.

Readiness results (2026-10-22): lint, TypeScript, all 19 deployment regression
checks, and the Webpack production build passed. Generated output was also
checked with `NEXT_PUBLIC_SITE_URL=https://drashokpatil.in` and indexing `false`:
all seven pages have correct canonical/OG URLs and noindex metadata; the sitemap
has seven HTTPS URLs, robots blocks crawling, the noindex header is configured,
JSON-LD is deferred, and `/api/enquiry` remains dynamic. The final build ran
outside the sandbox after a repeat sandbox run hit an EPERM on generated types.

## Build and dependency audit

- `build` deliberately runs `next build --webpack`.
- Next.js 16.3.8's default Turbopack build failed both inside and outside the
  Windows sandbox with `Failed to write app endpoint /page`. The trace identifies
  `src/components/clinic/clinic-gallery.module.css`, PostCSS evaluation and
  child-process startup: `node process exited before we could connect to it with
  exit code: 0`. No CSS syntax error was reported. This identifies the observed
  failure, not a proven upstream root cause.
- The same application builds with Webpack. Keep this supported explicit option
  for deployment; reassess Turbopack separately after a verified fix. Development
  retains `next dev`.
- Next.js, React, Motion, Lucide, local Manrope fonts, Resend and Zod are production
  dependencies. Tailwind/PostCSS, ESLint and TypeScript remain build dependencies.
  The official Netlify Next.js adapter is also a build dependency. Fonts require
  no Google Fonts download during builds.
- `package-lock.json` locks resolution. `npm audit --omit=dev` reported **zero
  known vulnerabilities on 2026-10-22**, an advisory snapshot. A fresh audit on
  2026-10-30 found new Next.js/Zod advisories; Next.js and eslint-config-next are
  now 16.4.3 and Zod is 4.6.6. The patched dependency installation reports zero
  known vulnerabilities. Use `npm ci` for a clean installation.

## Netlify integration

`netlify.toml` specifies `npm run build`, publish directory `.next` and npm 10.8.2;
`.nvmrc` selects Node 24. Netlify normally installs its OpenNext adapter
automatically, but the existing site's deploy log shows that did not happen.
This project therefore explicitly declares `@netlify/plugin-nextjs` in
`netlify.toml` and installs the current 5.x adapter as a devDependency (locked
to 5.16.5). This supported fallback requires maintaining the dependency;
UI-installed/automatic runtimes normally receive updates from Netlify instead.
`NETLIFY_NEXT_PLUGIN_SKIP=false` explicitly preserves server support.
Keep standard Next.js output:
do not use `output: "export"`, publish `out`, disable the adapter or add a catch-all
SPA rewrite, because the enquiry handler needs a server.

The application uses supported App Router pages, Server Components, static
metadata routes, `next/image` and a Node.js POST route handler. The adapter
provisions `/api/enquiry` as a Netlify Function and supports image optimization.
There is no custom server or filesystem persistence. This source review and local
build do not replace the first hosted adapter build and smoke test.

Source: [Netlify Next.js support](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).

## Repairing the existing Netlify 404

The supplied deploy log compiled all pages and `/api/enquiry`, then went directly
to uploading raw `.next` output (113 files, zero functions). It contains no
`@netlify/plugin-nextjs` lifecycle or function-bundling stage. A successful
`next build` alone does not prepare a server-based Next.js site for Netlify.
The missing adapter execution explains the 404; the log does not establish why
automatic runtime installation was missing/disabled on this existing project.

Publish the updated `netlify.toml`, `package.json`, `package-lock.json`,
`eslint.config.mjs` and this README to the connected GitHub branch, then trigger
a deploy with cleared cache. ESLint excludes Netlify's generated build output.
Do not change the correct root base directory, `npm run build` command or `.next`
publish directory. If an adapter-disable setting exists in Netlify's dashboard,
enable the Next.js runtime/build plugins. Do not use `NETLIFY_NEXT_PLUGIN_SKIP=true`
or `1`; the file configuration explicitly sets it to false for this application.

The next deploy should show the Next.js runtime being loaded and executing its
build hooks, followed by server function bundling before deployment. For the
first corrected deploy, expect at least one Next.js server function rather than
the supplied log's zero-function upload. Check `/`, `/about`, `/contact`, images,
`/robots.txt` and `/sitemap.xml`; `GET /api/enquiry` should return 405 instead of
Netlify's generic 404. Test the enquiry POST with approved mail settings separately.

Local repair validation (2026-10-30): lint, TypeScript and all 19 regression
tests passed. A full offline Netlify build using CLI 27.16.1 loaded runtime
5.16.5, built Next.js 16.4.3 and successfully bundled
`___netlify-server-handler`. The complete Netlify build exited successfully;
this verifies packaging locally, not the live site's dashboard settings or
deployment. The final dependency audit reported zero known vulnerabilities.

For a local packaging check without publishing, use a temporary CLI:

```bash
npm exec --yes --package=netlify-cli@27.16.1 -- netlify build --offline --context production
```

Set `NEXT_PUBLIC_SITE_URL=https://drashokpatil.netlify.app` and keep
`NEXT_PUBLIC_SITE_INDEXING_ENABLED=false` for staging. The offline build does not
read the project's Netlify dashboard configuration or publish a deployment.

Source: [Official adapter manual installation](https://github.com/opennextjs/opennextjs-netlify#manually-installing-the-nextjs-runtime).

## Environment variables

Set values in **Netlify > Project configuration > Environment variables**.
Use all scopes on Free; if scope selection is available, include Builds for
public configuration and Functions for mail settings. Never store secrets in
`netlify.toml` or `NEXT_PUBLIC_` variables. Values declared only in `netlify.toml`
are not available to functions at runtime.

| Variable | Initial staging value | Production value / purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://<project-name>.netlify.app` | `https://drashokpatil.in` after domain/HTTPS setup |
| `NEXT_PUBLIC_SITE_INDEXING_ENABLED` | `false` | Keep `false` until content and launch approval; then explicitly set `true` |
| `RESEND_API_KEY` | Separate test key, or unset to disable submission | Server-only Resend sending key |
| `ENQUIRY_EMAIL_FROM` | Verified test sender | Approved sender on a Resend-verified domain; display-name addresses are supported |
| `ENQUIRY_EMAIL_TO` | Owner-controlled test mailbox | Approved, monitored clinic recipient mailbox |

Netlify supplies `CONTEXT`, `URL`, `DEPLOY_PRIME_URL` and `DEPLOY_URL`; do not
set these manually. Node/npm selection is already configured in files. Do not
set `NODE_ENV=production` during dependency installation: Netlify can then omit
the build dependencies.

If context-specific values are available, keep production mail credentials out
of previews. Otherwise leave preview mail unset or use a separate staging project
with a test recipient. Missing configuration intentionally returns HTTP 503.
Rebuild/redeploy after environment changes: URL and indexing values are baked
into generated pages and metadata.

Sources: [function environment variables](https://docs.netlify.com/build/functions/environment-variables/),
[Node/npm selection](https://docs.netlify.com/build/configure-builds/manage-dependencies/).

## Canonicals, indexing, metadata and HTTPS

- `src/lib/site-url.ts` supplies the origin for page canonicals, Open Graph URLs,
  sitemap and launch-approved JSON-LD. The hard-coded `.com` origin was removed.
- Production-context builds use `NEXT_PUBLIC_SITE_URL`, falling back to Netlify's
  `URL` for initial staging. Local development defaults to `http://localhost:3000`.
  Netlify builds reject localhost and missing origins.
- Previews/branch deploys override the production origin with `DEPLOY_PRIME_URL`
  (or `DEPLOY_URL`) and always remain noindex, even if they inherit the true toggle.
- Canonical configuration must be an HTTPS origin without credentials, path,
  query or fragment. HTTP is accepted only for local development.
- Indexing defaults off: metadata and `X-Robots-Tag` say `noindex, nofollow`, and
  `/robots.txt` says `Disallow: /`. These are crawler instructions, not access control.
- Indexing requires the explicit `true` toggle and an explicit HTTPS
  `NEXT_PUBLIC_SITE_URL`. `/sitemap.xml` lists the seven public pages and remains
  available for verification. Robots advertises it only after indexing is enabled.
- Medical/business JSON-LD stays deferred behind the same launch gate; review its
  facts with the other content before enabling indexing.
- Netlify provides HTTPS/certificates. No application forced-domain redirect or
  HSTS preload was introduced. Later, verify certificate issuance, HTTP-to-HTTPS
  and primary-domain redirects before changing the canonical URL. No domain was
  purchased, no availability check was made, and no DNS was changed.

Source: [Netlify HTTPS](https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/).

## Enquiry delivery behavior

`POST /api/enquiry` validates with Zod, rejects honeypot submissions, reads
server-only mail settings at request time and **awaits** Resend. Only a provider
response containing an email ID and no error reports success. Missing settings
return 503, provider rejection/missing ID returns 502, and exceptions return 500.
Responses use `Cache-Control: no-store`. Logs contain generic failure types,
not patient details or credentials.

The existing frontend requires a successful HTTP status and `success: true`
before resetting the form. HTTP failures, invalid JSON and connection failures
show errors. Regression checks simulate server failures without sending email.

Success says **submitted for email delivery**, not delivered to the clinic.
API acceptance cannot establish final inbox delivery: later bounces, suppression
and delays are possible. Confirm mailbox receipt and Resend activity during hosted
verification. No webhook tracking or persistent queue was added.

Source: [Resend delivery and failure events](https://resend.com/docs/webhooks/event-types).

## Secrets and repository boundary

`.gitignore` already excludes `.env*` except the blank `.env.example`, plus
`.next`, `node_modules`, `.netlify`, local tooling output and PEM files. The
example has no credentials or real mailbox addresses. Keep secrets in Netlify.

No Git command, history inspection, commit or push was performed. Ignore rules
cannot untrack previously committed files: the owner must review tracked files
and history before publishing, and rotate any previously committed credential.

## Remaining public-launch blockers

1. **Clinic imagery:** all ten entries in `src/config/clinic-images.ts` are
   provisional, digitally altered visualizations, including furniture/fixtures.
   Verify or replace with accurate, approved photography. The portrait is marked
   real; an unused placeholder SVG remains in `public/images`.
2. **Recognition and unverified content:** `/achievements`, `/about` and
   `src/config/achievements.ts` contain framework copy/pending records. Verify
   organisations, dates, roles, certificates, event photos and camp details.
   The vaccination-camp statement and rented-clinic distance/history need explicit
   owner verification. Medical and achievement claims were not rewritten here.
3. **Contact/privacy approval:** confirm the existing real-looking phone number
   in `src/config/clinic.ts` is approved for publication; verify maps, hours and
   the enquiry workflow. Finalise privacy wording for the actual email service,
   mailbox access and information handling; it still refers to pre-launch work.
4. **Email/hosted checks:** configure a verified sender and approved recipient;
   verify real mailbox receipt and failure handling on Netlify. No live email was
   sent. The endpoint has a honeypot but no durable rate limiter; review abuse
   controls and provider quotas before unrestricted public use.
5. **Domain/approval:** ownership/availability, later DNS setup, HTTPS redirects,
   final canonical and launch approval remain pending. Keep indexing off.
6. **Owner-managed release:** review and make local changes available on GitHub
   before import. Requested source: `AAyushPatil195/dr-ashok-patil-site`.
   `AGENTS.md` has an older, different owner spelling; no remote was read or changed.

## Import the existing repository into Netlify

1. Review local changes and perform your own commit/push to
   `AAyushPatil195/dr-ashok-patil-site` when ready. Netlify cannot see unpushed files.
2. In the Netlify team dashboard, choose **Add new project > Import an existing
   project > GitHub**. Authorize repository access and select
   `AAyushPatil195/dr-ashok-patil-site`.
3. Choose the intended production branch (`main` if that is your branch). Use
   repository root as base, framework **Next.js**, command **`npm run build`**,
   publish **`.next`**, and leave the custom functions directory unset. These
   build settings come from `netlify.toml`. Select Netlify Free.
4. Before the first deploy, add `NEXT_PUBLIC_SITE_INDEXING_ENABLED=false`. Set
   `NEXT_PUBLIC_SITE_URL` to the known HTTPS Netlify origin, or omit it initially
   to use Netlify's `URL`. Never import the example localhost value into Netlify.
   Add the three server-only mail values if ready to test; otherwise expect 503.
5. Choose **Publish/Deploy**. Confirm Node 24, npm 10.8.2, Webpack, automatic
   OpenNext setup and a function for `/api/enquiry` in the deploy log. To edit
   variables later, open **Project configuration > Environment variables**, then
   trigger a new deploy.
6. On staging, verify all seven pages, responsive navigation, images, map, phone
   links and enquiry behavior. Check `/robots.txt`, `/sitemap.xml`, canonical/OG
   metadata and `X-Robots-Tag`. Confirm actual receipt with valid email settings
   and visible errors with missing/invalid settings.
7. Resolve blockers. In a separate domain-setup task, connect `drashokpatil.in`,
   verify HTTPS/primary-domain redirects, set
   `NEXT_PUBLIC_SITE_URL=https://drashokpatil.in`, and redeploy with indexing off.
   Only after launch approval set indexing `true` for production and redeploy.
   Previews remain noindex.

Source: [Netlify repository import](https://docs.netlify.com/start/quickstarts/deploy-from-repository/).

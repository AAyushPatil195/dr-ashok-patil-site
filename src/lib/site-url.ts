export function getSiteUrl(): URL {
  const context = process.env.CONTEXT;
  const isNetlifyPreview = Boolean(context && context !== "production");
  // Preview canonicals must never inherit the production origin.
  const configuredUrl = isNetlifyPreview
    ? process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL
    : process.env.NEXT_PUBLIC_SITE_URL || process.env.URL;

  if (!configuredUrl && process.env.NETLIFY === "true") {
    throw new Error("A canonical site origin is required for Netlify builds.");
  }

  const url = new URL(configuredUrl || "http://localhost:3000");
  const isLocalhost = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);

  if (
    (url.protocol !== "https:" && !(isLocalhost && url.protocol === "http:")) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    (process.env.NETLIFY === "true" && isLocalhost)
  ) {
    throw new Error("The canonical site URL must be an HTTPS origin without a path, credentials, query or fragment.");
  }

  return url;
}

export function isIndexingEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_SITE_INDEXING_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_SITE_URL) &&
    (!process.env.CONTEXT || process.env.CONTEXT === "production") &&
    getSiteUrl().protocol === "https:"
  );
}

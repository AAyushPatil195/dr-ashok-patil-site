const localSiteUrl = "http://localhost:3000";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(localSiteUrl);
  }

  try {
    const siteUrl = new URL(configuredUrl);

    if (siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash) {
      throw new Error();
    }

    return siteUrl;
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an absolute origin without a path, query, or hash.",
    );
  }
}

export function isPublicSiteUrl(siteUrl: URL): boolean {
  return siteUrl.protocol === "https:" && siteUrl.hostname !== "localhost";
}

export function isIndexingEnabled(siteUrl: URL): boolean {
  return (
    process.env.NEXT_PUBLIC_SITE_INDEXING_ENABLED === "true" &&
    isPublicSiteUrl(siteUrl)
  );
}

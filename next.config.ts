import type { NextConfig } from "next";
import { isIndexingEnabled } from "./src/lib/site-url";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.5"],
  async headers() {
    return isIndexingEnabled()
      ? []
      : [{
          source: "/:path*",
          headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
        }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

function strapiImagePattern() {
  try {
    const url = new URL(process.env.STRAPI_API_URL ?? "http://localhost:1337");

    if (!url.hostname) {
      return [];
    }

    return [
      {
        protocol: url.protocol === "https:" ? ("https" as const) : ("http" as const),
        hostname: url.hostname,
        port: url.port,
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      ...strapiImagePattern(),
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

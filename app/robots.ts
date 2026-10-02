import type { MetadataRoute } from "next";

// Demo preview: block all crawlers so it never competes with the business's own pages.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}

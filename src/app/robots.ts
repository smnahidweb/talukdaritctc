import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Static Export (output: 'export') এর জন্য এই লাইনটি প্রয়োজনীয়
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

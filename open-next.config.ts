import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import incrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

const base = defineCloudflareConfig({
  incrementalCache,
  enableCacheInterception: true,
});

export default {
  ...base,
  functions: {
    // Edge-runtime OG image routes must each be bundled as a separate edge function
    ogPost: {
      routes: ["app/(routes)/post/[slug]/opengraph-image-1yq2a3/route"],
      runtime: "edge",
    },
    ogApi: {
      routes: ["app/api/og/route"],
      runtime: "edge",
    },
  },
};

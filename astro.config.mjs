import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  // Partial SSR with Deno Deploy
  output: "hybrid",
  adapter: deno(),

  // i18n
  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
  },
  routing: {
    prefixDefaultLocale: true,
  },
});

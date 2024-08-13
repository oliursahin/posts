import { defineConfig , envField} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  site: "https://oliursahin.com",
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    env: {
        schema: {
            NEWSLETTER_LOOPS_API: envField.string({ context: "server", access: "secret" }),
        }
    }
},
});


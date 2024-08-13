import { defineConfig , envField} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    env: {
        schema: {
            NEWSLETTER_LOOPS_API: envField.string({ context: "server", access: "secret" }),
        }
    }
},
});

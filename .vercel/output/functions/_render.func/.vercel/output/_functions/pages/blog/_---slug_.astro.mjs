/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as renderComponent } from '../../chunks/astro/server_4vrYawY2.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/consts_DTSFOKzu.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime } from '../../chunks/PageLayout_C6nX7hPT.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://astro-nano-demo.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://astro-nano-demo.vercel.app");
const $$BackToPrev = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackToPrev;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="relative group w-fit flex pl-7 pr-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute top-1/2 left-2 -translate-y-1/2 size-4 stroke-2 fill-none stroke-current"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></polyline> </svg> <div class="text-sm"> ${renderSlot($$result, $$slots["default"])} </div> </a>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/BackToPrev.astro", void 0);

const $$Astro = createAstro("https://astro-nano-demo.vercel.app");
async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": " text-black font-mono" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="  text-black font-mono"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/" }, { "default": ($$result4) => renderTemplate`
back
` })} </div> <div class="space-y-1 my-10"> <div class="  text-black font-mono flex items-center gap-1.5"> <div class="font-base  text-black font-mono text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.date })} </div>
&bull;
<div class="font-base text-sm  text-black dark:text-white font-mono"> ${readingTime(post.body)} </div> </div> <div class=" text-2xl  text-black dark:text-white"> ${post.data.title} </div> </div> <article class="  text-black dark:text-white font-mono"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

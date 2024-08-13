import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderComponent } from './astro/server_4vrYawY2.mjs';
import 'kleur/colors';
import 'clsx';

function getFormattedDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

const $$Astro$1 = createAstro("https://astro-nano-demo.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${postDate} </time>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/layouts/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://astro-nano-demo.vercel.app");
const $$ArrowCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowCard;
  const { entry } = Astro2.props;
  const { as: Tag = "div", withDesc = false } = Astro2.props;
  const postDate = entry.data.date;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col gap-2 sm:flex-row sm:gap-x-4 [&_q]:basis-full decoration-black/15  hover:decoration-black/25  text-current hover:text-black  transition-colors duration-300 ease-in-out  border-t border-b border-neutral-100 py-2"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "text-neutral-400 font-medium", "date": postDate })} ${renderComponent($$result, "Tag", Tag, {}, { "default": ($$result2) => renderTemplate`${entry.data.draft && renderTemplate`<span class="text-red-500">(Draft) </span>`}<a data-astro-prefetch${addAttribute(`/blog/${entry.slug}/`, "href")} class="transition-all hover:text-muted-foreground hover:underline"> ${entry.data.title} </a> ${withDesc && renderTemplate`<p class="line-clamp-3 block  italic text-muted-foreground"> ${entry.data.title} </p>`}` })} </li>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/ArrowCard.astro", void 0);

export { $$ArrowCard as $ };

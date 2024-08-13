/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_4vrYawY2.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE, a as SOCIALS, H as HOME } from '../chunks/consts_DTSFOKzu.mjs';
import { $ as $$Container, b as $$Link, a as $$PageLayout } from '../chunks/PageLayout_C6nX7hPT.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_DmrpAE9s.mjs';
import 'clsx';
import axios from 'axios';
import { g as getEnv, v as validateEnvVariable, a as getEnvFieldType, c as createInvalidVariablesError, s as setOnSetGetEnv } from '../chunks/astro/env-setup_CbjfZWeG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-nano-demo.vercel.app");
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Newsletter;
  Astro2.url.searchParams.get("registered") === "true";
  Astro2.url.searchParams.get("error");
  return renderTemplate`${maybeRenderHead()}<p class="text-black">newsletter</p> <p style="margin-top: 1rem; font-size:.9rem;" class=" text-neutral-400 font-normal ">I also write short emails where I share stories, experiences and my bookmarks.</p> <form style="margin-top: 1.5rem; display: flex; align-items: center;" method="POST"> <div class="relative h-11 min-w-[200px]"> <input type="email" name="email" placeholder="Your email address" style="border: 1px solid #fffdfd; background: transparent; text-align: left; padding: 0 8px; " class="  h-full w-full font-mono font-medium text-sm  text-neutral-600"> </div> <button type="submit" style="margin-left: 10px;  text-align: center;" class="font-mono font-medium text-sm  text-neutral-600">
Subscribe
</button> </form> <!-- {
  registered && (
    <p class="text-sm sm:text-xs font-mono text-black">you've triggered a loop!</p>
  )
}
{error && <p class="text-sm sm:text-xs font-mono text-red-500">{error}</p>} -->`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/newsletter.astro", void 0);

const schema = {"NEWSLETTER_LOOPS_API":{"context":"server","access":"secret","type":"string"}};

// @ts-check

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

// used while generating the virtual module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setOnSetGetEnv((reset) => {
	NEWSLETTER_LOOPS_API = reset ? undefined : _internalGetSecret("NEWSLETTER_LOOPS_API");

});
let NEWSLETTER_LOOPS_API = _internalGetSecret("NEWSLETTER_LOOPS_API");

const $$Astro = createAstro("https://astro-nano-demo.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email");
    if (!email) {
      return Astro2.redirect(
        `/?error=${encodeURIComponent("Please enter an email")}`
      );
    }
    const api = NEWSLETTER_LOOPS_API;
    const formBody = `email=${encodeURIComponent(email)}`;
    try {
      const response = await axios.post(
        api,
        formBody,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      const e = error;
      console.error("Error while submitting newsletter form:", e.response?.data);
      return Astro2.redirect(
        `/?error=${encodeURIComponent("Failed to submit newsletter form")}`
      );
    }
    return Astro2.redirect("/?registered=true");
  }
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": "text-blackfont-mono" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h4 class=" text-black font-mono pb-2">
Hi, I'm ${renderComponent($$result3, "Link", $$Link, { "href": "https://twitter.com/oliursahin", "external": true }, { "default": ($$result4) => renderTemplate`
Oliur Sahin
` })}, co-founder of ${renderComponent($$result3, "Link", $$Link, { "href": "https://march.cat", "external": true }, { "default": ($$result4) => renderTemplate`
march.cat
` })}, a second brain for next generation makers to get things done.
</h4> <p> Here, I inconsistently post a few of my self notes or things I learn and find interesting.</p> <div class="space-y-14 text-black font-mono"> <section></section> <section class="space-y-3"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="text-black">
latest
</h5> </div> <ul class="flex flex-col text-black  font-mono"> ${blog.slice(0, 1).map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </section> <section class="space-y-3"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class=" text-black">
posts
</h5> </div> <ul> <ul class=" flex flex-col  divide-neutral-100 border-neutral-100"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </ul> </section> ${renderComponent($$result3, "Newsletter", $$Newsletter, {})} <section class=" space-y-3"> <h5 class=" text-black dark:text-white">
get in touch
</h5> <article> <p class="text-gray-500">I try to make a point to respond to every emails I receive. Some of my closest friends were strangers I decided to message on a whim.</p> </article> <ul class="flex flex-wrap gap-2"> ${SOCIALS.map((SOCIAL) => renderTemplate`<li class="flex gap-x-2 text-nowrap"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL.HREF, "external": true, "aria-label": `${SITE.NAME} on ${SOCIAL.NAME}` }, { "default": ($$result4) => renderTemplate`${SOCIAL.NAME}` })} ${"/"} </li>`)} <li class="line-clamp-1"> ${renderComponent($$result3, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.NAME}` }, { "default": ($$result4) => renderTemplate`
oliursahin [at] gmail dot com
` })} </li> </ul> </section> </div> ` })} ` })}`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/pages/index.astro", void 0);

const $$file = "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

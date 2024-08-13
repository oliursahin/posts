import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, m as maybeRenderHead, e as renderSlot, s as spreadAttributes, f as renderHead } from './astro/server_4vrYawY2.mjs';
import 'kleur/colors';
/* empty css                          */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { S as SITE } from './consts_DTSFOKzu.mjs';

const inter400 = "/_astro/inter-latin-400-normal.BOOGhInR.woff2";

const inter600 = "/_astro/inter-latin-600-normal.D273HNI0.woff2";

const $$Astro$3 = createAstro("https://astro-nano-demo.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://astro-nano-demo.vercel.app");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/nano.png" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpg" href="/headshot.jpg" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/jpg" href="/headshot.jpg" media="(prefers-color-scheme: light)"><link rel="icon" type="image/jpg" href="/headshot.jpg"><meta name="generator"', '><!-- Font preloads --><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n  \n\n    document.addEventListener("scroll", onScroll);\n  }\n\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 150);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth"\n    });\n  }\n\nfunction toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        `* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        `,\n      )\n    );\n\n    document.head.appendChild(css);\n\n\n  window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'], ['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpg" href="/headshot.jpg" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/jpg" href="/headshot.jpg" media="(prefers-color-scheme: light)"><link rel="icon" type="image/jpg" href="/headshot.jpg"><meta name="generator"', '><!-- Font preloads --><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n  \n\n    document.addEventListener("scroll", onScroll);\n  }\n\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 150);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth"\n    });\n  }\n\nfunction toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        \\`* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        \\`,\n      )\n    );\n\n    document.head.appendChild(css);\n\n\n  window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(inter400, "href"), addAttribute(inter600, "href"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/Head.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-screen-sm px-5 text-black dark:text-white font-mono"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/Container.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

const $$Astro$1 = createAstro("https://astro-nano-demo.vercel.app");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, external, underline = true, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")}${addAttribute(cn(
    "inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black hover:dark:decoration-white text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out",
    underline && "underline underline-offset-2"
  ), "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/Link.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header style="margin:0; padding:0.8rem;  background-color: transparent !important; z-index: 100;     backdrop-filter: blur(1.2px);"> ${renderComponent($$result, "Container", $$Container, { "class": " text-black dark:text-white font-mono bg-white" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap gap-y-2 justify-between pt-6"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "underline": false }, { "default": ($$result3) => renderTemplate` <div> ${SITE.NAME} </div> ` })} </div> ` })} </header>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import Container from "@components/Container.astro";
import BackToTop from "@components/BackToTop.astro";
---

<footer class="animate">
  <Container>
    <div class="relative">
      <div class="absolute right-0 -top-20">
        <BackToTop />
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div>
        🧡 {\`|\`} iced lemon tea 
      </div>
      <div class="flex flex-wrap gap-1 items-center">
        <button
          id="light-theme-button"
          aria-label="Light theme"
          class="group size-8 flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>
        <button
          id="dark-theme-button"
          aria-label="Dark theme"
          class="group size-8 flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <!-- <button
          id="system-theme-button"
          aria-label="System theme"
          class="group size-8 flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </button> 
      </div>
    </div>
  </Container>
</footer> -->`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://astro-nano-demo.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, { "title": `${title} | ${SITE.NAME}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/sajdakabir/Downloads/Documents/hand_dirty/posts/src/layouts/PageLayout.astro", void 0);

export { $$Container as $, $$PageLayout as a, $$Link as b, readingTime as r };

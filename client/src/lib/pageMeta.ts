/**
 * Per-route metadata for a single-page app. index.html carries the home page
 * defaults; each route overwrites title, description, canonical and the
 * matching Open Graph / Twitter tags so shares and search snippets are
 * route-specific instead of all reading as the home page.
 */
const SITE = "https://cobusnel.com";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    const isLink = selector.startsWith("link");
    el = document.createElement(isLink ? "link" : "meta");
    const m = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
    if (m) el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function setPageMeta(opts: { title: string; description: string; path: string; noindex?: boolean }) {
  const url = SITE + (opts.path === "/" ? "/" : opts.path);
  document.title = opts.title;
  setMeta('meta[name="description"]', "content", opts.description);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:title"]', "content", opts.title);
  setMeta('meta[property="og:description"]', "content", opts.description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[name="twitter:title"]', "content", opts.title);
  setMeta('meta[name="twitter:description"]', "content", opts.description);
  setMeta('meta[name="robots"]', "content", opts.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1");
}

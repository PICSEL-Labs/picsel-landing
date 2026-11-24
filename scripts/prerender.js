// Build step: write one static HTML file per page (dist/service.html, dist/features/qr.html, …) with that
// page's content and head, so crawlers that don't run JS (Naver, KakaoTalk previews) see the real page.
// Cloudflare Pages serves dist/service.html at /service.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);
const { render, PAGE_META, SITE_URL, JSON_LD } = await import(
  new URL('entry-server.js', ssrDir).href
);
const template = readFileSync(new URL('index.html', dist), 'utf8');

const esc = s =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Fails the build if index.html no longer has the tag, instead of silently shipping the home meta.
const swap = (html, re, value) => {
  if (!re.test(html))
    throw new Error(`prerender: ${re} not found in index.html`);

  return html.replace(re, (_, head) => head + value);
};

for (const [route, { title, description }] of Object.entries(PAGE_META)) {
  const url = SITE_URL + (route === '/' ? '' : route);
  let html = template;
  html = swap(html, /(<title>)[^<]*/, esc(title));
  html = swap(html, /(name="description"\s+content=")[^"]*/, esc(description));
  html = swap(html, /(property="og:title"\s+content=")[^"]*/, esc(title));
  html = swap(
    html,
    /(property="og:description"\s+content=")[^"]*/,
    esc(description),
  );
  html = swap(html, /(property="og:url"\s+content=")[^"]*/, url);
  // `<` escaped so answer text can never close the <script> early.
  const ld = JSON_LD[route]
    ? `\n    <script type="application/ld+json">${JSON.stringify(JSON_LD[route]).replace(/</g, '\\u003c')}</script>`
    : '';
  html = swap(
    html,
    /(\s*)<\/head>/,
    `<link rel="canonical" href="${url}" />${ld}\n  </head>`,
  );
  html = swap(html, /(<div id="root">)/, render(route));

  const file = fileURLToPath(
    new URL(route === '/' ? 'index.html' : `.${route}.html`, dist),
  );
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerendered ${route} → ${file.slice(file.indexOf('dist'))}`);
}

rmSync(ssrDir, { recursive: true });

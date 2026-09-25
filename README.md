# Made in Guangdong

Bilingual website for `madeinguangdong.com`, now running on Next.js while preserving the original static HTML pages as migration sources.

## Project Status

- Production domain: `https://madeinguangdong.com`
- Hosting: Cloudflare Workers Assets
- Source repository: `https://github.com/coolcbq/madeinguangdong_com`
- Site type: Next.js App Router with legacy HTML compatibility
- Primary branch in this checkout: `main`
- Only push remote: `origin`

## Structure

```text
.
├── index.html
├── about.html
├── chanpin-madeinguangdong.html
├── lvyouwenhua-madeinguangdong.html
├── xinwen-madeinguangdong.html
├── contact.html
├── privacy-policy.html
├── editorial-policy.html
├── sitemap.html
├── cn/
│   ├── index_cn.html
│   ├── about_cn.html
│   ├── chanpin-madeinguangdong_cn.html
│   ├── lvyouwenhua-madeinguangdong_cn.html
│   ├── xinwen-madeinguangdong_cn.html
│   ├── contact_cn.html
│   ├── privacy-policy_cn.html
│   ├── editorial-policy_cn.html
│   └── sitemap_cn.html
├── images/
│   ├── og-made-in-guangdong.svg
│   ├── guangdong-industry-clusters.svg
│   └── guangdong-product-categories.svg
├── styles.css
├── sitemap.xml
├── robots.txt
├── favicon.ico
├── package.json
├── next.config.mjs
├── scripts/
│   └── sync-public-assets.mjs
└── src/
    ├── app/
    │   ├── [[...slug]]/page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── not-found.tsx
    └── lib/
        └── legacy-pages.ts
```

## Local Preview

Install dependencies and run the Next.js development server:

```bash
pnpm install
pnpm run dev
```

Then visit `http://localhost:3000`.

## Verification

```bash
pnpm run lint
pnpm run build
```

The first migration phase reads the existing `.html` files and renders them through Next.js routes. Canonical public URLs should be preferred in navigation and sitemaps. Legacy compatibility redirects send `/index.html` to `/` and `/chanpin-madeinguangdong.html` to `/guangdong-products.html`.

## Cloudflare Preview

Cloudflare deployment uses a static Workers Assets build. The Worker keeps `/` mapped to `index.html` while applying SEO redirects for legacy duplicate URLs.

```bash
pnpm run build:cf
pnpm run cf:check
pnpm run preview:cf
```

Only deploy after local preview returns `200 OK` for `/`, important `.html` pages, `/sitemap.xml`, `/robots.txt`, and static assets, plus `301` for `/index.html` and `/chanpin-madeinguangdong.html`.

## Deployment Notes

The live site currently responds from Cloudflare. This checkout is managed with `coolcbq/madeinguangdong_com` as the only push repository. Before pushing changes:

1. Check the worktree:
   ```bash
   git status --short --branch
   ```
2. Verify important pages locally with `pnpm run dev` or `pnpm run build`.
3. Check production after deployment:
   ```bash
	   curl -I -L https://madeinguangdong.com
	   curl -I -L https://www.madeinguangdong.com
	   curl -I https://madeinguangdong.com/index.html
	   curl -I https://madeinguangdong.com/chanpin-madeinguangdong.html
	   curl -I -L https://madeinguangdong.com/sitemap.xml
   ```

## Maintenance Priorities

See `MAINTENANCE.md` for recurring checks and the current improvement backlog.

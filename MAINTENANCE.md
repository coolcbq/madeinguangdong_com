# Maintenance Guide

## Current Baseline

Date checked: 2026-06-25

- `https://madeinguangdong.com` returns HTTP 200 from Cloudflare.
- `https://www.madeinguangdong.com` redirects to the apex domain.
- `/index.html` redirects to `/`.
- `/chanpin-madeinguangdong.html` redirects to `/guangdong-products.html`.
- The only intended push repository is `https://github.com/coolcbq/madeinguangdong_com`.
- The site now uses Next.js App Router with the original HTML files preserved as the first migration-phase content source.
- Google Analytics tag `G-657MTWVKL2` is present in pages.
- `sitemap.xml` and `robots.txt` are present; sitemap should only include canonical public URLs.
- Contact, Privacy Policy, Editorial Policy, and HTML Sitemap pages are present in English and Chinese.
- The first zero-shooting image strategy is active through original SVG information graphics in `images/`.

## Release Checklist

Before publishing:

1. Confirm local changes:
   ```bash
   git status --short --branch
   git diff --stat
   ```
2. Run Next.js checks:
   ```bash
   pnpm run lint
   pnpm run build
   ```
3. Run Cloudflare checks when preparing a Cloudflare deployment:
   ```bash
   pnpm run build:cf
   pnpm run cf:check
   pnpm run preview:cf
   ```
4. Click through:
   - English homepage and four English detail pages
   - Chinese homepage and four Chinese detail pages
   - Language switchers in both directions
5. Confirm metadata:
   - Each page has one `<title>`
   - Each page has one `<meta name="description">`
   - `sitemap.xml` contains every public page
6. Check production after deployment:
   ```bash
	   curl -I -L https://madeinguangdong.com
	   curl -I -L https://www.madeinguangdong.com
	   curl -I https://madeinguangdong.com/index.html
	   curl -I https://madeinguangdong.com/chanpin-madeinguangdong.html
	   curl -I -L https://madeinguangdong.com/sitemap.xml
	   ```
7. In Google Search Console, inspect `/`, `/guangdong-products.html`, `/made-in-guangzhou.html`, `/dongguan-manufacturing.html`, `/shenzhen-electronics.html`, and `/cn/index_cn.html` after deployment.

## Monthly Checks

- Confirm production still returns 200.
- Confirm redirects still work.
- Review Google Analytics traffic.
- Review Google Search Console queries and pages for non-brand terms such as `guangdong products`, `made in guangzhou`, `dongguan manufacturing`, `广东特色`, and `岭南文化`.
- Update `sitemap.xml` if pages are added, removed, or renamed.
- Refresh visible dates or outdated copy.
- Check mobile layout after visual/content changes.

## Backlog

- Continue expanding original city and industry topic pages beyond the current core page updates.
- Add more zero-cost original information graphics first; use third-party images only when the license, attribution, and factual fit are clear.
- Gradually replace legacy HTML rendering with typed page data and React components.
- Move repeated language-switcher JavaScript into a shared client component.
- Improve the custom 404 page content and metadata.

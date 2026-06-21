# Maintenance Guide

## Current Baseline

Date checked: 2026-06-21

- `https://madeinguangdong.com` returns HTTP 200 from Vercel.
- `https://www.madeinguangdong.com` redirects to the apex domain.
- The only intended push repository is `https://github.com/coolcbq/madeinguangdong_com`.
- The site now uses Next.js App Router with the original HTML files preserved as the first migration-phase content source.
- Google Analytics tag `G-657MTWVKL2` is present in pages.
- `sitemap.xml` and `robots.txt` are present.
- Contact, Privacy Policy, Editorial Policy, and HTML Sitemap pages are present in English and Chinese.

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
   ```

## Monthly Checks

- Confirm production still returns 200.
- Confirm redirects still work.
- Review Google Analytics traffic.
- Update `sitemap.xml` if pages are added, removed, or renamed.
- Refresh visible dates or outdated copy.
- Check mobile layout after visual/content changes.

## Backlog

- Continue expanding original city and industry topic pages beyond the current core page updates.
- Add more topic-specific images with descriptive alt text.
- Gradually replace legacy HTML rendering with typed page data and React components.
- Move repeated language-switcher JavaScript into a shared client component.
- Improve the custom 404 page content and metadata.

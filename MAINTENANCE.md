# Maintenance Guide

## Current Baseline

Date checked: 2026-06-21

- `https://madeinguangdong.com` returns HTTP 200 from Vercel.
- `https://www.madeinguangdong.com` redirects to the apex domain.
- The only intended push repository is `https://github.com/coolcbq/madeinguangdong_com`.
- The site is static HTML/CSS with English pages at the root and Chinese pages under `cn/`.
- Google Analytics tag `G-657MTWVKL2` is present in pages.
- `sitemap.xml` and `robots.txt` are present.

## Release Checklist

Before publishing:

1. Confirm local changes:
   ```bash
   git status --short --branch
   git diff --stat
   ```
2. Click through:
   - English homepage and four English detail pages
   - Chinese homepage and four Chinese detail pages
   - Language switchers in both directions
3. Confirm metadata:
   - Each page has one `<title>`
   - Each page has one `<meta name="description">`
   - `sitemap.xml` contains every public page
4. Check production after deployment:
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

- Add richer original content to each section; current pages are thin and mostly placeholder-like.
- Add Open Graph and Twitter card metadata for better sharing previews.
- Consider canonical URLs and `hreflang` links between English and Chinese versions.
- Move repeated language-switcher JavaScript into a shared file if the site grows.
- Add a custom 404 page.

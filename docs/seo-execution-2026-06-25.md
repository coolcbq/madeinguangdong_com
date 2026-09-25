# SEO Execution Notes - 2026-06-25

## Goal

Start implementing the GSC-driven improvement plan without requiring paid photography.

## Changes Executed

- Removed the duplicate `/index.html` URL from `sitemap.xml`.
- Added canonical redirects for `/index.html` and `/chanpin-madeinguangdong.html`.
- Updated internal English homepage links to point at `/` instead of `index.html`.
- Added two original SVG information graphics:
  - `images/guangdong-industry-clusters.svg`
  - `images/guangdong-product-categories.svg`
- Embedded the graphics on the English homepage, English product page, Chinese homepage, and Chinese product page.
- Updated release documentation to reflect the current Cloudflare production path.

## Why This Helps

These changes reduce duplicate URL signals and give Google a cleaner canonical URL set. The SVG graphics add original, copyright-safe visual assets that explain the site's main entities: Guangdong product categories and Pearl River Delta manufacturing city clusters.

## Next Recommended Batch

- Expand `made-in-guangzhou.html`, `dongguan-manufacturing.html`, `shenzhen-electronics.html`, and `foshan-furniture-ceramics.html` with one focused comparison table each.
- Add one more original SVG for Lingnan culture and use it on the tourism/culture pages.
- After deployment, resubmit `sitemap.xml` in Google Search Console and inspect the top six pages manually.

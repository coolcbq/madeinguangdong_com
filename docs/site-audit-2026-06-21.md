# Site Audit - 2026-06-21

## Summary

This repository is a small static bilingual website. The production site is served by Vercel and is currently reachable.

## Live Checks

- `https://madeinguangdong.com`: HTTP 200
- `https://www.madeinguangdong.com`: HTTP 308 redirect to `https://madeinguangdong.com/`, then HTTP 200
- Server header: Vercel

## Repository Notes

- Source repository for future pushes: `https://github.com/coolcbq/madeinguangdong_com`.
- This checkout was aligned with the latest available site code before applying maintenance updates.
- The `upstream` remote was removed after the repository decision so future pushes target only `origin`.
- The site has no build step, package manager, or framework dependency.

## Maintenance Changes Applied

- Updated footer copyright year from 2023 to 2026.
- Fixed invalid `style:=` attributes in analytics wrapper divs.
- Replaced the image-sitemap namespace with the standard sitemap protocol namespace.
- Updated sitemap dates to 2026-06-21 and added the apex homepage URL.
- Added `robots.txt` pointing to the sitemap.
- Added `README.md` and `MAINTENANCE.md`.

## Risks / Next Decisions

- Confirm Vercel is connected to `coolcbq/madeinguangdong_com` if production auto-deployment from this repository is expected.
- Page content is thin, which limits SEO value even if technical metadata is present.
- Analytics script is present on all pages, but traffic and events were not checked from the analytics dashboard.

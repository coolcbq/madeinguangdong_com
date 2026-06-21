# Made in Guangdong

Static bilingual website for `madeinguangdong.com`.

## Project Status

- Production domain: `https://madeinguangdong.com`
- Hosting: Vercel
- Source repository: `https://github.com/coolcbq/madeinguangdong_com`
- Site type: static HTML/CSS
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
├── cn/
│   ├── index_cn.html
│   ├── about_cn.html
│   ├── chanpin-madeinguangdong_cn.html
│   ├── lvyouwenhua-madeinguangdong_cn.html
│   └── xinwen-madeinguangdong_cn.html
├── styles.css
├── sitemap.xml
├── robots.txt
└── favicon.ico
```

## Local Preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment Notes

The live site currently responds from Vercel. This checkout is managed with `coolcbq/madeinguangdong_com` as the only push repository. Before pushing changes:

1. Check the worktree:
   ```bash
   git status --short --branch
   ```
2. Verify important pages locally.
3. Check production after deployment:
   ```bash
   curl -I -L https://madeinguangdong.com
   curl -I -L https://www.madeinguangdong.com
   curl -I -L https://madeinguangdong.com/sitemap.xml
   ```

## Maintenance Priorities

See `MAINTENANCE.md` for recurring checks and the current improvement backlog.

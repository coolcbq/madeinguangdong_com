import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const assets = [
  ['favicon.ico', 'public/favicon.ico'],
  ['robots.txt', 'public/robots.txt'],
  ['sitemap.xml', 'public/sitemap.xml'],
  ['images/og-made-in-guangdong.svg', 'public/images/og-made-in-guangdong.svg']
];

for (const [source, target] of assets) {
  if (!existsSync(source)) {
    throw new Error(`Missing asset: ${source}`);
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

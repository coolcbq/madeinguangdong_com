import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';

const assets = [
  ['favicon.ico', 'public/favicon.ico'],
  ['robots.txt', 'public/robots.txt'],
  ['sitemap.xml', 'public/sitemap.xml']
];

for (const [source, target] of assets) {
  if (!existsSync(source)) {
    throw new Error(`Missing asset: ${source}`);
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

if (!existsSync('images')) {
  throw new Error('Missing asset directory: images');
}

rmSync(join('public', 'images'), { recursive: true, force: true });
cpSync('images', join('public', 'images'), { recursive: true });

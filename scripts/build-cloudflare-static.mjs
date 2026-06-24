import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';

const outputDir = 'dist-cloudflare';
const files = [
  'index.html',
  'about.html',
  'chanpin-madeinguangdong.html',
  'contact.html',
  'dongguan-manufacturing.html',
  'editorial-policy.html',
  'foshan-furniture-ceramics.html',
  'guangdong-products.html',
  'guangzhou-wholesale-markets.html',
  'lvyouwenhua-madeinguangdong.html',
  'made-in-guangzhou.html',
  'privacy-policy.html',
  'shenzhen-electronics.html',
  'sitemap.html',
  'xinwen-madeinguangdong.html',
  'styles.css',
  'favicon.ico',
  'robots.txt',
  'sitemap.xml',
  'cn/about_cn.html',
  'cn/chanpin-madeinguangdong_cn.html',
  'cn/contact_cn.html',
  'cn/editorial-policy_cn.html',
  'cn/guangdong-specialties_cn.html',
  'cn/index_cn.html',
  'cn/lingnan-culture_cn.html',
  'cn/lvyouwenhua-madeinguangdong_cn.html',
  'cn/privacy-policy_cn.html',
  'cn/sitemap_cn.html',
  'cn/xinwen-madeinguangdong_cn.html'
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  if (!existsSync(file)) {
    throw new Error(`Missing Cloudflare static source: ${file}`);
  }

  const target = `${outputDir}/${file}`;
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(file, target);
}

if (!existsSync('images')) {
  throw new Error('Missing images directory');
}

cpSync('images', `${outputDir}/images`, { recursive: true });

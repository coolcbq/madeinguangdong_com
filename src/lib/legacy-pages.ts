import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';

const SITE_URL = 'https://madeinguangdong.com';
const ROOT_DIR = path.join(/*turbopackIgnore: true*/ process.cwd());

const LEGACY_HTML_FILES = [
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

type AlternateLink = {
  hreflang: string;
  href: string;
};

export type LegacyPage = {
  routePath: string;
  sourcePath: string;
  bodyHtml: string;
  jsonLdScripts: string[];
  title: string;
  description?: string;
  canonical?: string;
  alternates: AlternateLink[];
  openGraph: Record<string, string>;
  twitter: Record<string, string>;
};

export function getLegacyRoutes() {
  const routes = LEGACY_HTML_FILES.map((relative) => {
    return {
      routePath: relative === 'index.html' ? '/' : `/${relative}`,
      sourcePath: path.join(ROOT_DIR, relative)
    };
  });

  routes.push({
    routePath: '/index.html',
    sourcePath: path.join(ROOT_DIR, 'index.html')
  });

  return routes.sort((a, b) => a.routePath.localeCompare(b.routePath));
}

function getAttr(tag: string, name: string) {
  const pattern = new RegExp(`${name}=("([^"]*)"|'([^']*)')`, 'i');
  const match = tag.match(pattern);
  return match?.[2] ?? match?.[3];
}

function findMeta(headHtml: string, attr: 'name' | 'property', value: string) {
  const pattern = new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]*>`, 'i');
  const tag = headHtml.match(pattern)?.[0];
  return tag ? getAttr(tag, 'content') : undefined;
}

function findLink(headHtml: string, rel: string) {
  const pattern = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, 'gi');
  return Array.from(headHtml.matchAll(pattern)).map((match) => match[0]);
}

export function getLegacyPage(routePath: string): LegacyPage | null {
  const normalizedRoute = routePath === '/' ? 'index.html' : routePath.replace(/^\/+/, '');
  const sourcePath = path.join(ROOT_DIR, normalizedRoute);

  if (!existsSync(sourcePath) || !sourcePath.endsWith('.html')) {
    return null;
  }

  const html = readFileSync(sourcePath, 'utf8');
  const headHtml = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const bodyHtml = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const title = headHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? 'Made in Guangdong';
  const description = findMeta(headHtml, 'name', 'description');
  const canonical = findLink(headHtml, 'canonical').map((tag) => getAttr(tag, 'href')).find(Boolean);
  const alternates = findLink(headHtml, 'alternate')
    .map((tag) => ({
      hreflang: getAttr(tag, 'hreflang') ?? '',
      href: getAttr(tag, 'href') ?? ''
    }))
    .filter((link) => link.hreflang && link.href);
  const jsonLdScripts = Array.from(
    headHtml.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  ).map((match) => match[1].trim());

  return {
    routePath,
    sourcePath,
    bodyHtml,
    jsonLdScripts,
    title,
    description,
    canonical,
    alternates,
    openGraph: {
      type: findMeta(headHtml, 'property', 'og:type') ?? '',
      title: findMeta(headHtml, 'property', 'og:title') ?? '',
      description: findMeta(headHtml, 'property', 'og:description') ?? '',
      url: findMeta(headHtml, 'property', 'og:url') ?? '',
      image: findMeta(headHtml, 'property', 'og:image') ?? ''
    },
    twitter: {
      card: findMeta(headHtml, 'name', 'twitter:card') ?? '',
      title: findMeta(headHtml, 'name', 'twitter:title') ?? '',
      description: findMeta(headHtml, 'name', 'twitter:description') ?? '',
      image: findMeta(headHtml, 'name', 'twitter:image') ?? ''
    }
  };
}

export function toMetadata(page: LegacyPage): Metadata {
  const languages = page.alternates.reduce<Record<string, string>>((acc, link) => {
    acc[link.hreflang] = link.href;
    return acc;
  }, {});

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical,
      languages
    },
    openGraph: {
      type: page.openGraph.type === 'website' ? 'website' : 'article',
      title: page.openGraph.title || page.title,
      description: page.openGraph.description || page.description,
      url: page.openGraph.url || `${SITE_URL}${page.routePath}`,
      images: page.openGraph.image ? [page.openGraph.image] : undefined
    },
    twitter: {
      card: page.twitter.card === 'summary_large_image' ? 'summary_large_image' : 'summary',
      title: page.twitter.title || page.title,
      description: page.twitter.description || page.description,
      images: page.twitter.image ? [page.twitter.image] : undefined
    }
  };
}

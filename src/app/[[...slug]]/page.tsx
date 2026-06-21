import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLegacyPage, getLegacyRoutes, toMetadata } from '@/lib/legacy-pages';

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

function routeFromSlug(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return '/';
  }

  return `/${slug.join('/')}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getLegacyRoutes().map((route) => ({
    slug: route.routePath === '/' ? [] : route.routePath.replace(/^\//, '').split('/')
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const routePath = routeFromSlug(slug);
  const page = getLegacyPage(routePath);

  if (!page) {
    return {};
  }

  return toMetadata(page);
}

export default async function LegacyPage({ params }: PageProps) {
  const { slug } = await params;
  const routePath = routeFromSlug(slug);
  const page = getLegacyPage(routePath);

  if (!page) {
    notFound();
  }

  return (
    <>
      {page.jsonLdScripts.map((script, index) => (
        <script
          key={`${routePath}-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
    </>
  );
}

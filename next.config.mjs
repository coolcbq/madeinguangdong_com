import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/chanpin-madeinguangdong.html',
        destination: '/guangdong-products.html',
        permanent: true
      }
    ];
  },
  turbopack: {
    root: projectRoot
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;

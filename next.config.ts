import type { NextConfig } from 'next';

// Static export: `next build` writes plain HTML per page to out/, which Cloudflare Pages serves as is.
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;

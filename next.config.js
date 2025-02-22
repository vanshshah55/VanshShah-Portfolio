/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['your-image-domains.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable React strict mode for better development checks
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: false,
  // Optimize fonts
  optimizeFonts: true,
  // Enable SWC minifier
  swcMinify: true,
};

module.exports = nextConfig;

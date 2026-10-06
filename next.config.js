/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Service x town combo pages were retired on 2026-10-06 (templated, town-name
      // swaps only). Each one 308s to its service page.
      {
        source: '/services/:service/:town/',
        destination: '/services/:service/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

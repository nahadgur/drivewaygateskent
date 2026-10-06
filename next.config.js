/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Blog posts merged into a stronger page on 2026-10-06 (Phase 3 clean-up).
      { source: '/blog/are-driveway-gates-worth-the-money/', destination: '/blog/do-electric-gates-add-value-to-your-house/', permanent: true },
      { source: '/blog/wooden-vs-metal-driveway-gates-pros-and-cons/', destination: '/blog/best-gate-material-kent-wood-steel-aluminium/', permanent: true },
      { source: '/blog/driveway-gates-kent-aonb-high-weald-north-downs/', destination: '/blog/planning-permission-driveway-gates-kent/', permanent: true },
      { source: '/blog/driveway-gates-west-kent-sevenoaks-tunbridge-wells/', destination: '/location/sevenoaks/', permanent: true },
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

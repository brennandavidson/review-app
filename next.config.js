/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/airassurance",
        destination: "https://search.google.com/local/writereview?placeid=ChIJ4_AW7pVdKocRLuyAtZs_hhM",
        permanent: true,
      },
      {
        source: "/designgroove",
        destination: "https://g.page/r/CSSYnxqIrXU8EAI/review",
        permanent: true,
      },
      {
        source: "/romansbarbershop",
        destination: "https://search.google.com/local/writereview?placeid=ChIJxwo-lN1zK4cRHvO3cnUGE6Y",
        permanent: true,
      },
      {
        source: "/russellpest",
        destination: "https://g.page/r/Cb_4d65PcMw0EAI/review",
        permanent: true,
      },
      {
        source: "/azfamilyair",
        destination: "https://g.page/r/CRCWUF25RWUJEAI/review",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

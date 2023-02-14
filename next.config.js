/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    sanityToken:
      'skJtJGQZE8VBy581ZI1F6bZR1L9bo2Kb2NdyQr1tWevDcfiSu8fnANIIqr4LjmVLi6RX9QrlJAg34OGsJBtySsN5ZTsSW6yOBdHdjWyiXHXnbSTWYXLjoyCKl1RReVogfenM9dq7g2rB6ywATSoWmnjpSSsn3wqWK1dn6WHl5yWL4vtdphCf',
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/products',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

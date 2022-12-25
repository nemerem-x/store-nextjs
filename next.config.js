/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  eslint: {
    dirs: ['.'] //or ['pages', 'hooks']
  }
}

module.exports = nextConfig

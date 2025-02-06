/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  domains: [
    "ravikanttiwari.com",
  ],
  images: {
    formats: ['image/webp'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomfox.ca'],
  },
  experimental: { esmExternals: true },
}

module.exports = nextConfig

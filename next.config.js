/** @type {import('next').NextConfig} */
/* @ts-expect-error Server Component */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

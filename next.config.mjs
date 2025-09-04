// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Prevent ESLint errors from failing Vercel builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: ignore type errors during build if you want faster deploys
    // (Remove this if you prefer type errors to block deploys)
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

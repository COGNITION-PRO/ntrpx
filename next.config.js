/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        // protocol: "https",
        // hostname: "cdn.sanity.io",
        // port: "",
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Optional, allows all paths under this domain
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

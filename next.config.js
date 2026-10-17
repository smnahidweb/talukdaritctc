/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // এই লাইনটি যোগ করুন
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
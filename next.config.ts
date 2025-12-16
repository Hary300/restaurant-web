import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ['res.cloudinary.com', 'logos-world.net'],
  },
};

export default nextConfig;

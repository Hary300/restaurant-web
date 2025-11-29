import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['foodish-api.com'], // tambahkan host API gambar luar
  },
};

export default nextConfig;

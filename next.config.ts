import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['faceboard-laravel.s3.ap-southeast-2.amazonaws.com', 'localhost'],
  },
}

export default nextConfig

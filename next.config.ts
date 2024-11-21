import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    WEATHER_API_CLIENT: process.env.WEATHER_API_CLIENT,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  images: {
    domains: ['openweathermap.org'],
  },
};

export default nextConfig;

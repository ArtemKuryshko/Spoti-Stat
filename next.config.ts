import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    AUTH_SPOTIFY_ID: process.env.AUTH_SPOTIFY_ID,
    AUTH_SPOTIFY_SECRET: process.env.AUTH_SPOTIFY_SECRET
  }
};

export default nextConfig;

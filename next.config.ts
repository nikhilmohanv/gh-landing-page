import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  // Required for client-side environment variables to work
  publicRuntimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;

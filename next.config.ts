import type { NextConfig } from "next";

const LOCAL_IPV4 = process.env.LOCAL_IPV4 ? process.env.LOCAL_IPV4 : "";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [LOCAL_IPV4],
};

export default nextConfig;

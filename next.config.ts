import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "http://localhost:3000/",
        permanent: false,
      },
      {
        source: "/tengu",
        destination: "http://localhost:3000/tengu",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://beyondxpe.com/",
        permanent: false,
      },
      {
        source: "/tengu",
        destination: "https://beyondxpe.com/tengu",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/ares/",
  basePath: "/ares",
  images: { unoptimized: true },
};

export default nextConfig;

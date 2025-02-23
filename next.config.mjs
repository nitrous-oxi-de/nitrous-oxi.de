/** @type {import('next').NextConfig} */
const nextConfig = {
    deviceSizes: [320, 480, 640, 750, 828, 1080], 
    imageSizes: [16, 32, 48, 64, 96, 128], 
    formats: ["image/webp"], 
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: "standalone",
};

export default nextConfig;

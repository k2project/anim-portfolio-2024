/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH, //<=== path for static assets
    assetPrefix: process.env.BASE_PATH, //<=== path for static assets
    images: {
        domains: ['media.licdn.com'],
    },
};

export default nextConfig;

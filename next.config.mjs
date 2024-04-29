/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH, //<=== path for static assets
    images: {
        domains: ['media.licdn.com'],
    },
};

export default nextConfig;

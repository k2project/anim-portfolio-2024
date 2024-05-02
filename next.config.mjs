/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/anim-portfolio-2024', //<=== path for static assets
    assetPrefix: '/anim-portfolio-2024', //<=== path for static assets
    images: {
        domains: ['media.licdn.com'],
    },
};

export default nextConfig;

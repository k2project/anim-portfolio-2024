/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //// <=== enables static exports
    basePath: process.env.NEXT_PUBLIC_BASE_PATH, //<=== path for static assets
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/storage/**",
            },
            {
                protocol: "https",
                hostname: "be-inr.genbiuinam.org",
                pathname: "/storage/**",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://be-inr.genbiuinam.org/api/public/:path*",
            },
        ];
    },
};

export default nextConfig;

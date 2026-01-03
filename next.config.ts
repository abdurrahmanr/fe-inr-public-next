import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "be-inready.obiwannn.web.id",
                pathname: "/storage/**",
            },
        ],
        dangerouslyAllowLocalIP: true,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination:
                    "https://be-inready.obiwannn.web.id/api/public/:path*",
            },
        ];
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/python/:path*",
            destination:
              process.env.NODE_ENV === "development"
                ? "http://127.0.0.1:5328/api/python/:path*"
                : "/api/index.py",
          },
        ];
      },
};

export default nextConfig;

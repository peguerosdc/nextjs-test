/** @type {import('next').NextConfig} */

/* attempt 1:
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
*/

/* attempt 2:
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/api/python/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:5328/api/python/:path*"
              : "/api/index.py",
        },
      ]
    }
  },
};
*/

/* attempt 3:
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/python/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:5328/api/python/:path*"
              : "/api/index.py",
        },
      ]
    }
  },
};
*/

const nextConfig = {};

export default nextConfig;

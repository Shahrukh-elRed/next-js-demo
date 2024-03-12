/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["upload.wikimedia.org"]
    // }

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/**',
          },
        ],
    }
}

export default nextConfig;

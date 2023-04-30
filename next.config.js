/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "cey52njm1fzs",
    CONTENTFUL_ACCESS_KEY: "QvrCfOHnOtYajeGLlCjHsPrYBSB6jhSq0pRzCzaKF9Q"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },

}

module.exports = nextConfig

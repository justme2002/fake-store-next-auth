/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    github: {
      CLIENT_ID: "49d4b686ccb5ce869276",
      CLIENT_SECRET: "688cc010984b9361d1383919147316246df9ddb8"
    }
  },
  images: {
    domains: ["fakestoreapi.com"]
  }
}

module.exports = nextConfig

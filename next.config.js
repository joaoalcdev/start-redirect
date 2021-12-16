/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://hotm.art/startenglishacademy',
        permanent: true
      }
    ]
  }
}

/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  env: {
    GITHUB_CLIENT_ID: 'Iv1.4028379926aaf3a6',
    GITHUB_CLIENT_SECRET: '3a1611c0fdb4143ef6a04997f1005ebc8bc78256',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

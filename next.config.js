/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Persistent disk cache races with OneDrive's file sync/lock on the
      // .next/cache pack rename, producing spurious ENOENT errors.
      config.cache = false
    }
    return config
  },
}
module.exports = nextConfig

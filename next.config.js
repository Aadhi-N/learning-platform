/*This import allows SVG files to be used in nextJS */
const withImages = require('next-images') 

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  images: {
    disableStaticImages: true
  },
  reactStrictMode: true
})

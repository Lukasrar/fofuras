const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@theme': path.resolve(__dirname, "src/theme/"),
      '@components': path.resolve(__dirname, "src/components/")
    }
  }
}
const { defineConfig } = require('@vue/cli-service')

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://172.21.93.222'
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
})

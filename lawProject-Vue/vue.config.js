const { defineConfig } = require('@vue/cli-service')
module.exports = 
defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
          logLevel: "debug"
        }
      }
    }
  })
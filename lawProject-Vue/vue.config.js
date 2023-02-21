const { defineConfig } = require('@vue/cli-service')
let target =  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'http://lawproject.ben-israel.com:8080'

    console.log(target)

module.exports = 
defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
      proxy: {
        "/api": {
          // target: "http://lawproject.ben-israel.com:8080",
          target: target,
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
          logLevel: "debug",
          ws: true
        }
      }
    }
  })
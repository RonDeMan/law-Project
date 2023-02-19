const { defineConfig } = require('@vue/cli-service')
let target =  process.env.NODE_ENV === 'development'
    ? 'http://localhost:80'
    : 'http://lawproject.ben-israel.com:80'

    console.log(target)

module.exports = 
defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
      proxy: {
        "/api": {
          // target: "http://lawproject.ben-israel.com:80",
          target: target,
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
          logLevel: "debug",
          ws: true
        }
      }
    }
  })
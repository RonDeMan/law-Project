const { defineConfig } = require('@vue/cli-service')
let target =  process.env.NODE_ENV === 'development'
                ? 'http://localhost:8080'
                : 'http://lawprojectnode-env.eba-ph3nyhch.eu-west-3.elasticbeanstalk.com'

    console.log(target)

module.exports = 
defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
      proxy: {
        "/api": {
          // target: "http://lawprojectnode-env.eba-ph3nyhch.eu-west-3.elasticbeanstalk.com",
          target: target,
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
          logLevel: "debug",
          ws: true
        }
      }
    }
  })
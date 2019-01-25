let proxyTarget = '';
if (process.env.NODE_ENV === 'development'){
  proxyTarget = 'http://localhost:3030'
} else {
  proxyTarget = 'http://101.132.46.146:3030'
}
// console.log(proxyTarget)
module.exports = {
  publicPath: '/',
  devServer: {
    port: 8085,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
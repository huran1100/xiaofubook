module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
   host: "192.168.0.112",
    port: '8081',
    https: false,
    hotOnly: false,
    proxy: {
      '/fubooking': {
        target: 'http://192.168.0.112:8080', //API服务器的地址
          changeOrigin: true, // 虚拟的站点需要更管origin
          /* pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
             '^/fubooking': '/fubooking'
           }*/
      }
    },
  }
        ws: true,  //代理websockets

}


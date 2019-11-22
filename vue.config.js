// 引入node的配置模块
const path = require('path')
// 定义resolve方法用于加载路径
// const resolve = (dir, 123123) => {
//   return path.join(__dirname, dir)
// }
const resolve = dir => path.join(__dirname, dir)
// 分两种情况，当前是在开发环境还是要打包编译
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  // 项目的基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    config.resolve.alias
      // @符号代表src目录
      .set('@', resolve('src'))
      // 经常用到的组件可以直接用_c代替
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件，可以减少打包的体积，同时加快打包的速度
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    // 需要代理的url,
    proxy: 'http://localhost:3000'
    // 会告诉开发服务器，将任何未知请求，
    // 也就是没有匹配到静态文件的请求，都代理到此url来满足跨域的请求
  }
}

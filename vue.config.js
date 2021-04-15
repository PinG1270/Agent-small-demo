/**
 * 为了提尕开发效率；编写配置项信息
 */

 const path = require("path");
 /**
  * 相对路径变为绝对路径的函数
  * @param {string} dir 
  * @returns 
  */
 function resolve(dir) {
     return path.resolve(__dirname, dir)
 }
 module.exports = {
     outputDir: "custom",
     // 这里编写webpack 
     // 注意 vue-cli 留的入口，很多插件版本问题。以及编写方式问题，会导致不支持效果
     configureWebpack: {
         resolve: {
             alias: {  // 配置 import 导入资源的公共路径
                 '@': resolve('src'),
                 'Utils': resolve('src/utils'),
                 // 'Utils': './src/utils',  // bug 
                 // 'Utils':  path.resolve(__dirname,'src/utils'),  // ok
                 'Asstes': resolve('src/assets')
             }
         },
 
     },
     // webpack-devServe 配置开发服务的
     devServer: {
         open: true, // 是否自动打开浏览器
         hot: true,   // 设置热加载
         port: 9000, // 设置服务的端口号，固定的端口
 
         /*
         代理服务器:
         接口地址A：http://192.168.1.118:9528/api/goodList?page=1
         发请求地址B：http://localhost:9000/dev-api/goodList?page=1
         需求想让B 发送到A服务上
         需要让：pathRewrite 告诉node B代理了谁。
         */
         proxy: {
             // 代理地址 
             '/dev-api': {
                 target: 'http://192.168.1.120:9527',  //  被代理的服务器地址
                 changeOrigin: true,                   //  是否跨域
                 ws: true,                             //  是否代理webscoket
                 // 重写的是什么地址？？？
                 // 真正重写的是 http://192.168.1.118:9528/ 的地址
 
 
                 // 作用：告诉 http-proxy-middlewar 由哪一个地址(proxy.key)，代替  proxy.target 
                 pathRewrite: {
                     // ^/dev-api 作用： 插件里面要求 告诉代理服务器，要代理哪一个地址上 /dev-api
                     //           写法：正则语法：规定这么写的
                     // /api 将来 /dev-api/goodList?page=1 源码回将这个地址变为  'http://192.168.1.118:9528/api/goodList?page=1'
 
                     "^/dev-api": "/api"
                     // /dev-api/register
 
                     //bug:几种情况原因：
                     // 1 没有 "^/dev-api": "/api"   ---> http-proxy-middleware 插件内部 不知道 /dev-api 代理 target
                     // 2 没有 ^     ----> 不满足正则要求
                     // 3 '/api' 与 target 域'/dev-api' 关系   
                     //   --> 原来  /dev-api  相当于 target
                     //   -->有了/api 后 /dev-api === target/api
                 },
                 logLevel: 'debug'    // 查看被代理的真实地址
 
 
 
 
             },
             // bug
             //     // /dev-api/goodList?page=1
             //     // 不会变为：http://192.168.1.118:9528/api/goodList?page=1
             //     // --->404  http://192.168.1.118:9528/   ---> /api/goodList?page=1
             //     // 问题： /api/goodList?page=1 添加不到 http://192.168.1.118:9528/
 
 
         }
     }
 }
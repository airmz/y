/*
 * @Author: airmz
 * @Date: 2021-10-08 15:21:57
 * @LastEditTime: 2021-10-09 10:28:31
 * @FilePath: /yeb/vue.config.js
 */
let proxyObj = {}
proxyObj['/'] = {
    //目标地址
    target: 'http://117.50.118.190:8081',
    //websocket
    ws: false,
    //发送请求头host会设置为target
    changeOrigin: true, //允许跨域
    //不重写请求地址
    pathRewrite: {
        '^/': '/'
    }
}
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
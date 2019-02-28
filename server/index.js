// 引入模块
var express = require('express')
// 引入配置
var consts = require('./consts');
// 引入读取文件的模块
var fs = require('fs');
// 引入协议模块
var http = require('http');
var https = require('https');

// 读取协议
var key = fs.readFileSync('./ssl/private.pem');
var cert = fs.readFileSync('./ssl/file.crt');

// 创建应用程序
var app = express();

// 引入应用程序中间件
var middleware = require('./middleware');
middleware(app)

// 路由
var router = require('./router')
// 将安装router的过程放在router模块内
router(app);

// 封装接口
module.exports = function () {
  // 获取指令参数
  // console.log(process.argv)
  // http请求端口号。process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。
  var httpPort = process.argv[2] || consts('HTTP_PORT');
  // https端口号,
  // 如果传递的http端口号，没有传递https端口号，让https端口号在http端口号基础之上加1
  var httpsPort = process.argv[3] || (process.argv[2] && +process.argv[2] + 1) || consts('HTTPS_PORT');
  // 启动服务，这里的http.createServer(app)与http.createServer((req, res) => {})是一样的
  http.createServer(app)
    // 监听端口号
    .listen(httpPort, () => console.log(`http server listen ${httpPort}`))
  // 启动https服务
  https.createServer({
    key,
    cert
  }, app)
    // 监听端口号
    .listen(httpsPort, () => console.log(`https server listen ${httpsPort}`))
}

// 引入模块
var express = require('express')
// 引入路径管理模块
var path = require('path');
// 引入ejs
var ejs = require('ejs')
// 引入配置
var consts = require('../consts');
// 引入session
var session = require('express-session');
// 引入bodyparser
var bodyParser = require('body-parser');

module.exports = function (app) {
  // 将esj的插值语法标志%变成$
  ejs.delimiter = '$';
  // 设置html引擎
  app.engine('.html', ejs.__express);
  // 设置视图引擎
  app.set('view engine', 'ejs')

  // session中间件
  app.use(session({
    secret: 'czfwowkfaowwedqmzp',
    resave: true,
    // 是否保存未初始化的会话
    saveUninitialized: false
  }))
  // 对json格式的post参数进行解析，得到一个json化的req.body
  app.use(bodyParser.json());

  // 静态化
  // 可以通过process.cwd(), __dirname
  // express.static是目录静态化中间件方法
  // app.use('/static/', express.static(path.join(process.cwd(), './static/')))

  // 静态化
  var STATICS = consts('STATICS');
  for (var i in STATICS) {
    // i是静态化的目录，STATICS[i]是重定向的目录
    // 此时不要使用__dirname
    app.use(express.static(path.join(process.cwd(), STATICS[i])))
  }
}

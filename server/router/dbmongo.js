// 引入模块
var express = require('express');
// 引入处理接口的回调函数
var dbmongo = require('../routerCallback/dbmongo');
// 定义路由中间件
var router = new express.Router();

router
  //注册
  .post('/register', dbmongo.register)
  // 登录
  .post('/login', dbmongo.login)
  //检测用户名
  .post('/checkUsername', dbmongo.checkUserName)
// 暴露接口
module.exports = router;

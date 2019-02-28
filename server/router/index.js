// 安装路由中间件
// 引入页面的路由
var page = require('./page');
//引入数据库操作路由
var dbmongo = require('./dbmongo');
// 安装路由
module.exports = (app) => {
  // 将安装路由中间件的过程放在了router模块内
  app.use(page);
  app.use(dbmongo)
}

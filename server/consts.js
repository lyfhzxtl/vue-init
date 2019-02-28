var conf = {
  HTTP_PORT: 80,
  HTTPS_PORT: 443,
  success: {
    error: 0,
    msg: '操作成功'
  },
  usernameIsOK: {
    error: 0,
    msg: '该用户名可以使用'
  },
  connectError: {
    error: 1,
    msg: '数据库连接失败'
  },
  saveError: {
    error: 2,
    msg: '保存失败'
  },
  findError: {
    error: 3,
    msg: '查询失败'
  },
  noUser: {
    error: 4,
    msg: '用户名或密码错误'
  },
  hasUser: {
    error: 5,
    msg: '该用户名已存在'
  },
  STATICS: {
    '/dist/': './dist/'
  }
}
module.exports = function (property) {
  return conf[property];
}
// 方便获取错误信息
/* module.exports.msg = function (id) {
  return conf.MESSAGE[id] || {}
} */

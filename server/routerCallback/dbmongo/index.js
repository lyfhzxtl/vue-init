var register = require('./register');
var login = require('./login');
var checkUserName = require('./checkUserName');
//暴露接口
module.exports = {
  register,
  login,
  checkUserName
}

var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/blog';
var consts = require('../consts');
//断开数据库连接
function end(res, msg) {
  mongoose.disconnect(() => {
    if (typeof msg === 'string') {
      res.json(consts(msg));
    } else {
      //如果是个对象
      res.json(msg);
    }
  });
}
//连接数据库
function connect(res) {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true
  });
  //连接失败
  mongoose.connection.on('error', () => {
    end(res, 'connectError');
  });
}
module.exports = {
  end,
  connect
}

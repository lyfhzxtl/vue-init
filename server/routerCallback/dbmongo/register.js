var db = require('../../db/db');
var UserInfo = require('../../db/userInfo');
module.exports = (req, res) => {
  db.connect(res);
  var username = req.body.username;
  var password = req.body.password;
  var userInfo = new UserInfo({
    username,
    password
  });
  userInfo.save((err) => {
    if (err) {
      db.end(res, 'saveError');
    } else {
      db.end(res, 'success');
    }
  })
}

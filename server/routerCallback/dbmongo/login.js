var db = require('../../db/db');
var UserInfo = require('../../db/userInfo');
module.exports = (req, res) => {
  db.connect(res);
  var username = req.body.username;
  var password = req.body.password;
  UserInfo.find({
    username,
    password
  }, (err, doc) => {
    if (err) {
      db.end(res, 'findError');
    } else {
      if (Object.keys(doc).length) {
        req.session.username = username;
        var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        var token = '';
        for (let i = 0; i < 30; i++) {
          token += str[Math.floor(Math.random() * 62)];
        }
        return db.end(res, {
          error: 0,
          data: {
            token
          }
        });
      }
      db.end(res, 'noUser');
    }
  })
}

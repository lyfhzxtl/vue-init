var db = require('../../db/db');
var UserInfo = require('../../db/userInfo');
module.exports = (req, res) => {
  db.connect(res);
  var username = req.body.username;
  UserInfo.find({
    username
  }, (err, doc) => {
    if (err) {
      db.end(res, 'findError');
    } else {
      if (Object.keys(doc).length) {
        return db.end(res, 'hasUser');
      }
      db.end(res, 'usernameIsOK');
    }
  })
}

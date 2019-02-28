module.exports = (req, res) => {
  res.render('index.html', {
    msg: '测试'
  });
  // 获取ua
  // var ua = req.header('User-Agent');
  // 判断是否存在mobile，存在就是移动端
  // if (/mobile/i.test(ua)) {
  // 	// 移动端
  // 	res.render('mobile.html', { msg: '商城' })
  // } else {
  // 	// pc端
  // 	res.render('pc.html', { msg: '商城' })
  // }
}

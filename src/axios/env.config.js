let baseUrl = '';
switch (process.env.NODE_ENV) {
  case 'development': //开发环境
    baseUrl = '';
    break;
  case 'test': //测试环境
    baseUrl = 'http://www.test.com/';
    break;
  case 'production': //生产环境
    baseUrl = '';
    break;
}
export default baseUrl;

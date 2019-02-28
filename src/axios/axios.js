// import axios from 'axios';
/* import {
  Toast
} from 'vant'; */
import router from '../router';
import store from '../store';
import baseURL from './env.config';
import {
  timeout,
  defaultContentType,
  statusCodeMap
} from './axios.config';
const instance = window.axios.create({
  baseURL,
  timeout
});
instance.defaults.headers.post['Content-Type'] = defaultContentType;
// 提示
const tip = msg => {
  window.vant.Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  });
}
// 登录
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}
// 错误处理
const errorHandle = status => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
      // 403 token过期
      // 清除本地token和store中的token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('setToken', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    default:
      console.log(statusCodeMap[status] || '未知网络请求错误');
  }
}
// 声明一个数组用于存储ajax标识和每个ajax请求的取消函数
let pending = [];
let CancelToken = window.axios.CancelToken;
let removePending = config => {
  pending.forEach((item, index) => {
    if (item.u === config.url + '&' + config.method) {
      item.cancel();
      pending.splice(index, 1);
    }
  })
}
// 请求拦截器
instance.interceptors.request.use(
  (config = {}) => {
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((c) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({
        u: config.url + '&' + config.method,
        cancel: c
      });
    });
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error));
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const {
      response
    } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      store.commit('changeNetwork', false);
    }
  });
export default instance;

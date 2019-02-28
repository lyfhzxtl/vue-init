// import Vue from 'vue';
// import Vuex, {
//   Store
// } from 'vuex';
// 安装vuex
// Vue.use(Vuex);
// 创建store并传递各个模块
export default new window.Vuex.Store({
  // 数据
  state: {
    netWork: true,
    token: null
  },
  // 同步消息
  mutations: {
    setToken(state, value) {
      state.token = value;
      window.localStorage.setItem('token', value);
    },
    changeNetwork(state, value) {
      state.netWork = value;
    }
  },
  // 订阅异步
  actions: {}
})

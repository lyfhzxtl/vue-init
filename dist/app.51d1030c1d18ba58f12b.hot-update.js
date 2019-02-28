webpackHotUpdate("app",{

/***/ "wNa6":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import Vue from 'vue';\n// import Vuex, {\n//   Store\n// } from 'vuex';\n// 安装vuex\n// Vue.use(Vuex);\n// 创建store并传递各个模块\n/* harmony default export */ __webpack_exports__[\"default\"] = (new window.Vuex.Store({\n  // 数据\n  state: {\n    netWork: true,\n    token: null\n  },\n  // 同步消息\n  mutations: {\n    setToken: function setToken(state, value) {\n      state.token = value;\n      window.localStorage.setItem('token', value);\n    },\n    changeNetwork: function changeNetwork(state, value) {\n      state.netWork = value;\n    }\n  },\n  // 订阅异步\n  actions: {}\n}));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

})
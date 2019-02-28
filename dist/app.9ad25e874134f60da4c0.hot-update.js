webpackHotUpdate("app",{

/***/ "QctN":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"wNa6\");\n// 导入vue模块\n// import Vue from 'vue';\n// 导入路由模块\n// import VueRouter from 'vue-router';\n // 引入组件,路由懒加载\n\nvar Home = function Home() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./views/Home.vue */ \"u1G+\"));\n};\n\nvar Login = function Login() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./views/Login.vue */ \"pVsz\"));\n};\n\nvar Register = function Register() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./views/Register.vue */ \"c8+F\"));\n};\n\nvar Edit = function Edit() {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./views/Edit.vue */ \"EHE7\"));\n}; // 安装路由模块\n// Vue.use(VueRouter);\n// 配置路由规则、实例化路由\n\n\nvar router = new window.VueRouter({\n  // mode: 'history',\n  routes: [{\n    path: '/',\n    redirect: '/home'\n  }, {\n    path: '/home',\n    meta: {\n      requireAuth: false\n    },\n    component: Home\n  }, {\n    path: '/login',\n    meta: {\n      requireAuth: false\n    },\n    component: Login\n  }, {\n    path: '/register',\n    meta: {\n      requireAuth: false\n    },\n    component: Register\n  }, // requireAuth: true 表示进入这个路由是需要登录的\n  {\n    path: '/edit',\n    meta: {\n      requireAuth: true\n    },\n    component: Edit\n  }, {\n    path: '*',\n    redirect: '/'\n  }]\n});\nrouter.beforeEach(function (to, from, next) {\n  var token = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.token;\n\n  if (to.meta.requireAuth && token || !to.meta.requireAuth) {\n    next();\n  } else {\n    next({\n      path: '/login'\n    });\n  }\n  /* if (from.path === '/login' && token) {\n    next({\n      path: '/edit'\n    })\n  } */\n\n});\nrouter.afterEach(function () {\n  window.scrollTo(0, 0);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ })

})
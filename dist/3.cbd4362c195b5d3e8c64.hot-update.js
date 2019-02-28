webpackHotUpdate(3,{

/***/ "026T":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {};\n  },\n  beforeCreate: function beforeCreate() {\n    this.form = this.$form.createForm(this);\n  },\n  methods: {\n    submitLogin: function submitLogin() {\n      var form = this.form;\n      var loginInfo = {\n        username: form.getFieldValue('username'),\n        password: form.getFieldValue('password')\n      };\n      this.$http.post('/login', loginInfo).then(function (_ref) {\n        var data = _ref.data;\n\n        if (data.error === 0) {\n          location.hash = '#/edit';\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Login.vue?./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})
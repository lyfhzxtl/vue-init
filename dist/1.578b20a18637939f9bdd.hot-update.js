webpackHotUpdate(1,{

/***/ "q/qd":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      confirmDirty: false,\n      resContent: '',\n      formItemLayout: {\n        labelCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 4\n          }\n        },\n        wrapperCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 20\n          }\n        }\n      },\n      tailFormItemLayout: {\n        wrapperCol: {\n          xs: {\n            span: 24,\n            offset: 0\n          },\n          sm: {\n            span: 16,\n            offset: 10\n          }\n        }\n      }\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.form = this.$form.createForm(this);\n  },\n  methods: {\n    checkUsername: function checkUsername() {\n      var _this = this;\n\n      var form = this.form;\n      var registerInfo = 'username' + form.getFieldValue('username') + 'password' + form.getFieldValue('password');\n      this.$http.post('/checkUsername', registerInfo).then(function (_ref) {\n        var data = _ref.data;\n        _this.resContent = data.msg;\n      });\n    },\n    handleConfirmBlur: function handleConfirmBlur(e) {\n      var value = e.target.value;\n      this.confirmDirty = this.confirmDirty || !!value;\n    },\n    compareToFirstPassword: function compareToFirstPassword(rule, value, callback) {\n      var form = this.form;\n\n      if (value && value !== form.getFieldValue('password')) {\n        /* eslint-disable */\n        callback('两次密码输入不一致');\n      } else {\n        callback();\n      }\n    },\n    validateToNextPassword: function validateToNextPassword(rule, value, callback) {\n      var form = this.form;\n\n      if (value && this.confirmDirty) {\n        form.validateFields(['confirm'], {\n          force: true\n        });\n      }\n\n      callback();\n    },\n    submitRegister: function submitRegister() {\n      var form = this.form;\n      var registerInfo = 'username' + form.getFieldValue('username') + 'password' + form.getFieldValue('password');\n      this.$http.post('/register', registerInfo).then(function (_ref2) {\n        var data = _ref2.data;\n\n        if (data.error === 0) {\n          location.hash = '#/login';\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Register.vue?./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})
webpackHotUpdate(1,{

/***/ "q/qd":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      confirmDirty: false,\n      formItemLayout: {\n        labelCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 4\n          }\n        },\n        wrapperCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 20\n          }\n        }\n      },\n      tailFormItemLayout: {\n        wrapperCol: {\n          xs: {\n            span: 24,\n            offset: 0\n          },\n          sm: {\n            span: 16,\n            offset: 10\n          }\n        }\n      }\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.form = this.$form.createForm(this);\n  },\n  methods: {\n    handleConfirmBlur: function handleConfirmBlur(e) {\n      var value = e.target.value;\n      this.confirmDirty = this.confirmDirty || !!value;\n    },\n    compareToFirstPassword: function compareToFirstPassword(rule, value, callback) {\n      var form = this.form;\n\n      if (value && value !== form.getFieldValue('password')) {\n        /* eslint-disable */\n        callback('请重新确认密码');\n      } else {\n        callback();\n      }\n    },\n    validateToNextPassword: function validateToNextPassword(rule, value, callback) {\n      var form = this.form;\n\n      if (value && this.confirmDirty) {\n        form.validateFields(['confirm'], {\n          force: true\n        });\n      }\n\n      callback();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Register.vue?./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})
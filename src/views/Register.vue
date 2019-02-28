<template>
  <a-card
    hoverable
    style="width: 35%; margin: 150px auto; padding: 20px 20px 0 0; border-radius: 10px"
  >
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout" label="用户名" :help="resContent">
        <a-input
          v-decorator="[
            'username',
            {
              rules: [{
                required: true, message: '请输入用户名',
              }, {
                pattern: /^[0-9a-zA-Z]{6,12}$/, message: '用户名只能包含字母和数字，6-12位'
              }]
            }
          ]"
          autocomplete="off"
          @blur="checkUsername"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码">
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{
                required: true, message: '请输入密码',
              }, {
                validator: validateToNextPassword,
              }, {
                min: 8, message: '最小长度为8位'
              }],
            }
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="确认密码">
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [{
                required: true, message: '请确认密码',
              }, {
                validator: compareToFirstPassword,
              }],
            }
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit" @click="submitRegister">注册</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      confirmDirty: false,
      resContent: '',
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 10
          }
        }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    checkUsername () {
      const form = this.form;
      this.$http.post('/checkUsername', { username: form.getFieldValue('username') })
        .then(({ data }) => {
          this.resContent = data.msg
        })
    },
    handleConfirmBlur (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        /* eslint-disable */
        callback('两次密码输入不一致');
      } else {
        callback();
      }
    },
    validateToNextPassword (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    submitRegister () {
      const form = this.form;
      const registerInfo = { username: form.getFieldValue('username'), password: form.getFieldValue('password') };
      this.$http.post('/register', registerInfo)
        .then(({ data }) => {
          if (data.error === 0) {
            location.hash = '#/login';
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

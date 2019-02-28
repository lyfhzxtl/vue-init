<template>
  <div class="register">
    <a-card hoverable style="width: 100%; border-radius: 10px">
      <a-form :form="form">
        <a-form-item v-bind="formItemLayout" label="用户名" class="user">
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
            @focus="clearUserTip"
          />
          <span class="userTip">{{resContent}}</span>
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
        <a-form-item class="register-form-item">
          <a-button
            type="primary"
            html-type="submit"
            class="register-form-button"
            @click="submitRegister"
          >注册</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
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
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    checkUsername () {
      const form = this.form;
      let reg = /^[0-9a-zA-Z]{6,12}$/;
      let username = form.getFieldValue('username');
      let usernameIsOk = reg.test(username);
      if (username && usernameIsOk) {
        this.$http.post('/checkUsername', { username: form.getFieldValue('username') })
          .then(({ data }) => {
            this.resContent = data.msg
          })
      }
    },
    clearUserTip () {
      this.resContent = '';
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
      const { form: { validateFields } } = this;
      validateFields((errors, values) => {
        if (!errors) {
          const registerInfo = { username: form.getFieldValue('username'), password: form.getFieldValue('password') };
          this.$http.post('/register', registerInfo)
            .then(({ data }) => {
              if (data.error === 0) {
                location.hash = '#/login';
              }
            })
        }
      });

    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .register {
    width: 35%;
    margin: 150px auto;
    padding: 20px 20px 0 0;
  }
}
@media screen and (max-width: 768px) {
  .register {
    width: 90%;
    margin: 100px auto;
  }
}
.user {
  position: relative;
}
.userTip {
  position: absolute;
  left: 0;
  bottom: -40px;
  font-size: 14px;
  color: #09f;
}
.register-form-item {
  text-align: center;
}
.register-form-button {
  width: 100%;
  max-width: 150px;
}
</style>

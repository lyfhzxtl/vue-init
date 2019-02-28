<template>
  <div class="login">
    <a-card hoverable style="width: 100%; border-radius: 10px">
      <a-form :form="form">
        <a-form-item>
          <a-input
            v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名' }] }
        ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] }
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item :help="resContent" class="login-form-item">
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            @click="submitLogin"
          >登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resContent: ''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    submitLogin () {
      const form = this.form;
      const loginInfo = { username: form.getFieldValue('username'), password: form.getFieldValue('password') };
      this.$http.post('/login', loginInfo)
        .then(({ data }) => {
          if (data.error === 0) {
            this.resContent = '';
            this.$store.commit('setToken', data.data.token);
            location.hash = '#/edit';
          } else {
            this.resContent = data.msg;
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .login {
    width: 35%;
    margin: 150px auto;
    padding: 20px 20px 0 0;
  }
}
@media screen and (max-width: 768px) {
  .login {
    width: 90%;
    margin: 100px auto;
  }
}
.login-form-item {
  text-align: center;
}
.login-form-button {
  width: 100%;
  max-width: 150px;
}
</style>

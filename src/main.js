// import Vue from 'vue';
import App from './App.vue';
import {
  Form,
  Input,
  Icon,
  Button,
  Card
} from 'ant-design-vue';
import router from './router';
import store from './store';
import axios from './axios/axios';
window.Vue.prototype.$http = axios;
window.Vue.use(Form);
window.Vue.use(Input);
window.Vue.use(Icon);
window.Vue.use(Button);
window.Vue.use(Card);
/* new window.Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */
/* eslint-disable no-new */
new window.Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// // 引入px转换为rem的js
// import './until/rem'

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

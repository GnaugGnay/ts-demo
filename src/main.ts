import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 添加实例方法
import './instanceFunc';

Vue.config.productionTip = false;

import './mock/index.ts';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

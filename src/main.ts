import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

declare var window : any;

Vue.config.productionTip = false;

// Referencing for easy debugging
window.process = {};
window.process.env = process.env;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

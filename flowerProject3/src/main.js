import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/normalize.css';
import './assets/css/style.css';
import './assets/css/ddsmoothmenu.css';
import './assets/css/nivo-slider.css';
import './assets/css/orman.css';
import './assets/css/slimbox2.css';
import './assets/css/templatemo_style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

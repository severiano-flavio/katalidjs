import Vue from 'vue'
import App from './App.vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify';
import router from './routes';
import {store} from './store/index.js';

Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

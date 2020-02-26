import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
import router from './router';
import vuetify from './plugins/vuetify';
// import { initCounterStore } from '@/counterStore';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  // created: () => {
  //   initCounterStore();
  // },
  render: h => h(App)
}).$mount('#app');

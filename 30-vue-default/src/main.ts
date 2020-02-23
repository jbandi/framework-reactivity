import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
import router from './router';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// Basic demo of reactivity in Vue:
// import { reactive, watch } from '@vue/composition-api'
//
// const state = reactive({
//   count: 0
// });
//
// watch(() => {
//   document.body.innerHTML = `<h1> count is ${state.count} </h1>`
// });

// setInterval(() => state.count++, 1000);
//
// window.DEBUG = state;

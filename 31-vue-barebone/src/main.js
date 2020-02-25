import Vue from 'vue'
import VueCompositionApi, { reactive, watch } from '@vue/composition-api';
Vue.use(VueCompositionApi);


const state = reactive({
  count: 0
});

watch(() => {
  document.body.innerHTML = `<h1> count is ${state.count} </h1>`
});

// setInterval(() => {
//   state.count++;
// }, 1000);

// expose state on the window:
window.DEBUG = state;

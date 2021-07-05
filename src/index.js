import Vue from 'vue';
import App from './Components/App.vue';

const vm = new Vue({
  render: (h) => h(App),
});
vm.$mount('#app');

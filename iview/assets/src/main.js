import Vue from 'vue'
import layout from './components/layout'

window.vue = Vue;

new Vue({
  el: 'body',
  components: { layout }
});
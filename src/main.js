// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueI18n)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
import App from './App.vue'
import router from './router'
import store from './store'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'typeface-roboto'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

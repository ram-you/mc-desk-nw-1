import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'


import App from './App.vue'
import router from './router'
import store from './store'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'typeface-roboto'

Vue.use(Vuetify, {
  iconfont: 'mdi', 
  icons: {
    'product': 'mdi-dropbox',
    'support': 'mdi-lifebuoy',
    'steam': 'mdi-steambox',
    'pc': 'mdi-desktop-classic',
    'xbox': 'mdi-xbox',
    'playstation': 'mdi-playstation',
    'switch': 'mdi-nintendo-switch'
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

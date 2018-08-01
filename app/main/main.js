

require("../nw/main") 

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store' 

Vue.config.productionTip = false


import ar_tn from './locales/ar-tn/';
import en_gb from './locales/en-gb/';
import fr_fr from './locales/fr-fr/';

import axios from 'axios'   
Vue.http = Vue.prototype.$http = axios 

import db from './db/datastore' 
Vue.prototype.$db = db 
 
Vue.prototype.$localesItems= [{ name: 'العربية', locale: 'ar-tn' }, { name: 'English', locale: 'en-gb' }, { name: 'Français', locale: 'fr-fr' }]
Vue.prototype.$colorThemeItems= [{ name: 'Dark (black)', theme: 'dark' }, { name: 'Light (white)', theme: 'light' }]

import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

import  './assets/fonts/Ubuntu/index.css'
import  './assets/fonts/Tajawal/index.css'


import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.userLocale,
  fallbackLocale: 'en-gb',
  messages: {
    'ar-tn': ar_tn,//require('./locales/ar-tn.json'),
    'en-gb': en_gb,//require('./locales/en-gb.json'),
    'fr-fr': fr_fr,//require('./locales/fr-fr.json')
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
 


import Vue from 'vue'
import VueSession from 'vue-session'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './assets/css/dayshmookh.layout.css'

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

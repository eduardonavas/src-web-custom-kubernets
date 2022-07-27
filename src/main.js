import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import infiniteScroll  from 'vue-infinite-scroll'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  infiniteScroll,
  render: h => h(App)
}).$mount('#app')

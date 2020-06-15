import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Col,Row,Icon,Field} from 'vant'
import './assets/reset.css'
Vue.config.productionTip = false

Vue.use(Button).use(Col).use(Row).use(Icon).use(Field);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 
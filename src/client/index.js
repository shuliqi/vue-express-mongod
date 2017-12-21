import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import axios from './http/'
Vue.prototype.$axios = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.debug = true
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    store,
    axios,
    template: '<App/>',
    components: { App }
})
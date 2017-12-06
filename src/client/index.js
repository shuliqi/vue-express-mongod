import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import axios from 'axios'
Vue.prototype.$ajax = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router: router,
    store: store,
    template: '<App/>',
    components: { App }
})
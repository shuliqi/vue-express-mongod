import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import $ from 'jquery'

import axios from './http/'
Vue.prototype.$axios = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Highlight from './highlight/highlight.js'
Vue.use(Highlight)

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
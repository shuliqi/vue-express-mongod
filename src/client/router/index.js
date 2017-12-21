import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import webIndex from './../components/web/index'
import adminIndex from './../components/admin/index'
import login from '../components/admin/login'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            name: 'webIndex',
            path: '/',
            component: webIndex
        },
        {
            name: 'login',
            path: '/admin',
            component: login
        },
        {
            name: 'adminIndex',
            path: '/adminIndex',
            component: adminIndex
        }
    ]
})



module.exports = router
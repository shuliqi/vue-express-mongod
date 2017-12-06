import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import webIndex from './../components/web/index'
import adminIndex from './../components/admin/index'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            name: 'webIndex',
            path: '/',
            component: webIndex
        },
        {
            name: 'adminIndex',
            path: '/admin',
            component: adminIndex
        }
    ]
})



module.exports = router
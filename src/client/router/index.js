import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import webIndex from './../components/web/index'
import adminIndex from './../components/admin/edit'
import login from '../components/admin/login'
import adminEdit from '../components/admin/edit'
import adminList from '../components/admin/list'
Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        /**
         * 前端首页
         */
        
        {
            name: 'webIndex',
            path: '/',
            component: webIndex
        },
        /**
         * 后端登录页
         */
        {
            name: 'login',
            path: '/admin',
            component: adminIndex
        },
        /**
         * 后端主页
         */
        {
            name: 'adminIndex',
            path: '/adminIndex',
            component: adminIndex
        },
        /*
         *后端编辑页
         */
        {
            name: 'adminEdit',
            path: '/adminEdit',
            component: adminEdit
        },
        /*
        *后端文章列表页
        */
        {
            name: 'adminList',
            path: '/adminList',
            component: adminList
        }

    ]
})




module.exports = router
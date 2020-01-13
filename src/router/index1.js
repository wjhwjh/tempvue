import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/main/mainLayout.vue'
import Home from '../views/Home/Home.vue'
//import HomePerson from '../views/Home/HomePerson.vue'
Vue.use(VueRouter)

 let routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'home',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'home',
            routerGuard: true
        },
        children: [
            {
                path: 'myHome',
                name: 'myHome',
                component: () => import('@/views/Home/Home.vue'),
                meta: {
                    title: '首页',
                    routerGuard: true,
                },
            },
           /* {
                path: '/homePerson',
                name: 'homePerson',
                component: () => import('@/views/Home/HomePerson.vue'),
                meta: {
                    title: '个人中心',
                    routerGuard: true,
                },
            }*/
        ]
    },
/*    {

        path: '/setting',
        name: 'setting',
        redirect: '/setting/base',
        component: Layout,
        meta: {
            title: '设置',
            icon: 'setting',
            routerGuard: true
        },
        children: [
            {
                path: 'base',
                name: 'settingBase',
                component: () => import('@/views/Setting/Base.vue'),
                meta: {
                    title: '基础设置',
                    routerGuard: true,
                },
            },
            {
                path: 'Role',
                name: 'settingRole',
                component: () => import('@/views/Setting/Role.vue'),
                meta: {
                    title: '权限设置',
                    routerGuard: true,
                },

            }
        ]
    },*/
/*    {
        path: '/login',
        name: 'login',
        meta: {
            title: '退出登录',
            icon: 'login'
        },
        component: () => import( '@/layout/login/login.vue' )
    }*/


]
/*const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]*/
const router = new VueRouter({
    routes
})

export default router

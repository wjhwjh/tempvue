import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/main/mainLayout.vue'

Vue.use(VueRouter)
let routes = [
    {
        path: '/',
        redirect: {name: 'myHome'},
        name: 'home',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'home',
            routerGuard: true
        },
        children: [
            {
                path: 'home',
                name: 'myHome',
                component: () => import('@/views/Home/Home.vue'),
                meta: {
                    title: '首页',
                    routerGuard: true,
                },
            },
            {
                path: '/homePerson',
                name: 'homePerson',
                component: () => import('@/views/Home/HomePerson.vue'),
                meta: {
                    title: '个人中心',
                    routerGuard: true,
                },
            }
        ]
    },
    {

        path: '/setting',
        name: 'setting',
        redirect: {name: 'settingBase'},
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
    },
    {
        path: '/goods',
        name: 'goods',
        redirect: {name: 'goodsList'},
        component: Layout,
        meta: {
            title: '商品',
            icon: 'shop',
            routerGuard: true,
        },
        children: [
            {
                path: 'goodsList',
                name: 'goodsList',
                meta: {
                    routerGuard:true
                },
                component: () => import('@/views/Good/GoodsList.vue')
            }
        ]
    },
    {
        path: '/goodDetail',
        name: 'goodDetail',
        redirect: {name: 'gDetail'},
        component: Layout,
        show: false,
        meta: {
            routerGuard:true
        },
        children: [
            {
                path: 'detail/:id',
                name: 'gDetail',
                meta: {
                    routerGuard:true
                },
                component: () => import('@/views/GoodDetail/GoodDetail.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '退出登录',
            icon: 'login'
        },
        component: () => import( '@/layout/login/login.vue' )
    },
    {
        path:'*',
        show: false,
        component: ()=>import('@/layout/error/error.vue'),
    }


]

const router = new VueRouter({
    routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layoutFrame.vue'

//import HomePerson from '../views/Home/HomePerson.vue'
Vue.use(VueRouter)

 const routes = [
     {
        path:'/',
        redirect:'/home',
        component: Layout,
        children:[
            {
                path:'home',
                component: () => import('@/views/Home/Home.vue'),
            }
        ]
     }
]
const router = new VueRouter({
    routes
})

export default router

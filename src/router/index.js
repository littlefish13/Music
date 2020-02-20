import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Recommend from '../components/Recommend'
import Hot from '../components/Hot'
import Search from '../components/Search'
import Play from '../components/Play'
import Common from '../components/Common'
Vue.use(VueRouter)

const routes = [{
        path: '/index',
        component: Index,
        children: [{
                path: 'recommend',
                component: Recommend,
            },
            {
                path: 'hot',
                component: Hot,
            },
            {
                path: 'search',
                component: Search,
            },
            {
                path: '',
                redirect: 'recommend'
            }

        ]

    },
    {
        path: '/songlist/:id',
        component: Hot
    },
    {
        path: '/play/:songid',
        component: Play
    },
    {
        path: '/common/:songid',
        component: Common
    },
    {
        path: '*',
        redirect: '/index'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
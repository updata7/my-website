import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        hidden: true
    },
    {
        path: '/home',
        component: () => import('@/views/home/index'),
        hidden: true
    },
    {
        path: '/blog',
        component: () => import('@/views/blog/index'),
        hidden: true
    },
    {
        path: '/about',
        component: () => import('@/views/about/index'),
        hidden: true
    },
]
const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
  
const router = createRouter()

export default router
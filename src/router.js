import Vue from 'vue';
import Router from 'vue-router'

import Home from '@/views/HomeView'
import About from '@/views/AboutView'
import Error from '@/views/ErrorView'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
})
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/index';
import Mobile from './components/home/mobile';

Vue.use(Router)

const routes = [

    {
        name: 'home',
        path: '',
        component: Home
    },
    {
        name: 'mobile',
        path: '/mobile',
        component: Mobile
    }
]

const router = new Router({ routes})

export default router
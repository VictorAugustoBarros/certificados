import Vue from 'vue'
import Main from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Index from './Index.vue';
import Login from './Login.vue';

const routes = [
    {
        name: 'index',
        path: '/index',
        component: Index
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    el: '#app',
    router,
    render: createEl => createEl(Main)
});
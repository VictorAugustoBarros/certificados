import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'

import App from "./App";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import VModal from 'vue-js-modal'

Vue.use(VModal);

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
        meta: {
            title: 'Index'
        },
        component: Index
    }, {
        name: 'login',
        path: '/login',
        meta: {
            title: 'Login'
        },
        component: Login
    }
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    el: '#app',
    router,
    render: createEl => createEl(App)
});

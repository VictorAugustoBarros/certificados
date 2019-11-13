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

import Index from './components/Index.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import Logout from './components/Logout.vue';
import Certificados from './components/Certificados.vue';
import ListarUsuarios from './components/ListarUsuarios.vue';
import InserirUsuarios from './components/InserirUsuarios.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes = [
    {
        name: 'pageNotFound',
        path: "*",
        component: PageNotFound,
    },{
        name: 'index',
        path: '/index',
        component: Index
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }, {
        name: 'about',
        path: '/about',
        component: About
    }, {
        name: 'logout',
        path: '/logout',
        component: Logout
    }, {
        name: 'certificados',
        path: '/certificados',
        component: Certificados
    }, {
        name: 'listar_usuarios',
        path: '/listar_usuarios',
        component: ListarUsuarios
    }, {
        name: 'inserir_usuarios',
        path: '/inserir_usuarios',
        component: InserirUsuarios
    }
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    el: '#app',
    mode: 'history',
    router,
    render: createEl => createEl(App)
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});
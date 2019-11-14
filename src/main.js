import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App";
import {routes} from "./routes";

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

const router = new VueRouter({mode: 'history', routes: routes});

// router.beforeEach((to, from, next) => {
//     if (!isAuthenticated) next('/login');
//     else next()
// });

new Vue({
    el: '#app',
    mode: 'history',
    router,
    render: createEl => createEl(App)
});
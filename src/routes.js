import Logout from './components/Logout.vue';
import About from './components/sobre/Sobre.vue';
import ListarUsuarios from './components/listarUsuarios/ListarUsuarios.vue';
import InserirUsuarios from './components/InserirUsuarios/InserirUsuarios.vue';
import PageNotFound from './components/pageNotFound/PageNotFound.vue';
import {isSignedIn} from "@/auth/auth";

async function valida_login(next) {
    let loggedIn = await isSignedIn();
    if (loggedIn) {
        next();
    }
}

export const routes = [
    {
        path: "/"
    },
    {
        name: 'pageNotFound',
        path: "*",
        component: PageNotFound,
    },
    {
        path: '/login',
        async beforeEnter(_, __, next) {
            await valida_login(next)
        }
    },
    {
        path: '/index',
        async beforeEnter(to, from, next) {
            await valida_login(next)
        }
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: About,
        async beforeEnter(_, __, next) {
            await valida_login(next)
        }
    }, {
        name: 'listar_usuarios',
        path: '/listar_usuarios',
        component: ListarUsuarios,
        async beforeEnter(_, __, next) {
            await valida_login(next)
        }
    },
    {
        name: 'inserir_usuarios',
        path: '/inserir_usuarios',
        component: InserirUsuarios,
        async beforeEnter(_, __, next) {
            await valida_login(next)
        }
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '*',
        component: PageNotFound
    }
];
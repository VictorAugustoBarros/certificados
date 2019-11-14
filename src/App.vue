<template>
    <div id="app">
        <Index v-if="this.token"></Index>
        <Login v-else></Login>
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from './components/login/Login.vue'
    import Index from './components/index/Index.vue'

    export default {
        name: 'App',
        data() {
            return {
                token: ""
            }
        },
        components: {
            Login,
            Index
        },
        updated: function () {
            this.token = localStorage.getItem('token');
            if (this.token == null) {
                this.$router.push("/login")
            }
        }
    }
</script>

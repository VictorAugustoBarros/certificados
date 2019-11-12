<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" replace></router-link>
        </div>
        <router-view @authenticated="setAuthenticated"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                carteira: ""
            }
        },
        mounted() {
            if (!this.authenticated) {
                // eslint-disable-next-line no-console
                this.$router.replace({name: "login"});
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            }
        }
    }
</script>

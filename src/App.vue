<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" replace></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false
            }
        },
        mounted() {

            if (!this.authenticated) {
                // eslint-disable-next-line no-console
                this.$router.replace({name: "login"});
            }
        }
    }
</script>

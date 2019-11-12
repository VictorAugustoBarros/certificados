<template>
    <label>Teste</label>
</template>

<script>
    export default {
        name: "Logout",
        mounted() {
            this.$router.replace({path: '/login', params: {authenticated: false}});
        },
    }
</script>

<style scoped>

</style>
<template>
    <div></div>
</template>

<script>
    export default {
        name: "Logout",
        mounted() {
            localStorage.removeItem("token");
        }
    }

</script>

<style scoped>

</style>
<template>
    <div id="body_view">
        <Navigation></Navigation>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue'
    export default {
        name: "PageNotFound",
        components:{
            Navigation
        }
    }
</script>

<style scoped>
    #body_view{
        background-image: url("../assets/not_found.png");
    }
</style>
<template>
    <div>
        <Navigation>
            <template v-slot="footer">
                teste1
            </template>
        </Navigation>
    </div>
</template>

<script>
    import Navigation from "../navigation/Navigation";

    export default {
        name: "Index",
        components: {
            Navigation
        },
        mounted(){
            this.$router.replace("/index")
        }
    }
</script>

<style scoped>

</style>
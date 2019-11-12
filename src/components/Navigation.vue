<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/index" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/logout" class="nav-link">Logout</router-link>
                </li>
            </ul>
        </nav>
        <br/>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    ul {
        overflow: auto;
    }

</style>

<script>
    export default {
        components: {}
    }
</script>
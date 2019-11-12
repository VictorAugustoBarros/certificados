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
                    <router-link to="/certificados" class="nav-link">Certificados</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/usuarios" class="nav-link">Usuarios</router-link>
                </li>
                <li class="nav-item">
                    <mdb-dropdown>
                        <mdb-dropdown-toggle slot="toggle">Basic dropdown</mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item>Action</mdb-dropdown-item>
                            <mdb-dropdown-item>Another action</mdb-dropdown-item>
                            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                            <div class="dropdown-divider"></div>
                            <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
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
    import {mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle} from 'mdbvue';

    export default {
        name: 'DropdownPage',
        components: {
            mdbDropdown,
            mdbDropdownItem,
            mdbDropdownMenu,
            mdbDropdownToggle
        }
    }
</script>
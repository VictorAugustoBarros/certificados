<template>
    <mdb-navbar id="navMain" tag="div" color="indigo" dark>
        <mdb-navbar-brand tag="div">
            <router-link style="text-decoration: none;color: white" to="/index">
                <img src="" height="30" width="75px" alt="">Certificados
            </router-link>
        </mdb-navbar-brand>
        <mdb-navbar-toggler tag="div">
            <mdb-navbar-nav tag="div">
                <mdb-nav-item active>
                </mdb-nav-item>
                <mdb-nav-item class="link">
                    <router-link style="text-decoration: none;color: white" to="/sobre">Sobre</router-link>
                </mdb-nav-item>
                <mdb-nav-item class="link">
                    <router-link style="text-decoration: none;color: white" to="/listar_usuarios">Usuários</router-link>
                </mdb-nav-item>
            </mdb-navbar-nav>
            <mdb-navbar-nav right>
                <mdb-nav-item href="/logout" active waves waves-fixed>
                    <router-link style="text-decoration: none;color: white" to="/logout">Logout</router-link>
                </mdb-nav-item>
            </mdb-navbar-nav>
            <slot name="header"></slot>
            <slot name="footer"></slot>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script src="./navigation.js"></script>
<style src="./navigations.css" lang="css"></style>
<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>

                <div class="col-md-10">
                    <button type="button" class="btn btn-info" v-on:click="this.new_user">novo usuário</button>
                    <br><br>
                    <mdb-datatable :data="this.registros" striped bordered>

                    </mdb-datatable>
                </div>
                <slot></slot>
                <div class="col-md-1"></div>
            </div>
        </div>
    </div>
</template>

<script src="./listarUsuarios.js"></script>
<style src="./listarUsuarios.css" lang="css"></style>
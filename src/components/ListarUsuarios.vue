<template>
    <div>
        <Navigation></Navigation>
        <br><br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>

                <div class="col-md-10">
                    <button type="button" class="btn btn-info" v-on:click="this.new_user">novo usuário</button>
                    <br><br>
                    <mdb-datatable :data="this.registros" striped bordered/>
                </div>

                <div class="col-md-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mdbDatatable} from 'mdbvue';
    import Navigation from "./Navigation";


    export default {
        name: "Certificados",
        components: {
            mdbDatatable,
            Navigation
        },
        data() {
            return {
                errors: [],
                registros: {
                    columns: [
                        {
                            label: 'Id',
                            field: '_id',
                            display: false
                        },
                        {
                            label: 'Nome',
                            field: 'carteira'
                        }, {
                            label: 'Password',
                            field: 'password'
                        }
                    ],
                    rows: []
                },
                data: {
                    value: [],
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                },
            }
        },
        mounted() {
            let uri = 'http://localhost:4000/get_users';
            this.axios
                .post(uri, "", this.data.headers)
                .then(response => {
                    for (let x in response.data.values) {
                        this.registros.rows.push(response.data.values[x]);
                    }
                })
                .catch(errors => {
                    this.errors.push(errors);
                });
        },
        methods: {
            new_user: function () {
                // eslint-disable-next-line no-console
                console.log("new user");
                this.$router.push({path: '/inserir_usuarios'});
            }
        }
    }
</script>

<style scoped>
    tbody + thead{
        display: none;
    }
</style>
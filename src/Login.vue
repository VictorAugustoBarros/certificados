<template>
    <form @submit.prevent="addPost">
        <div class="container-fluid">
            <div class="row">
                <div id="start" class="col-md-4"></div>

                <div id="middle" class="col-md-4">
                    <p class="h4 text-center mb-4">Login</p>
                    <div class="grey-text">
                        <mdb-input label="Carteira" icon="address-card" type="text" v-model="data.body.carteira" required/>
                        <mdb-input label="Senha" icon="lock" type="password" v-model="data.body.password" required/>
                    </div>

                    <div class="text-center">
                        <label style="color: red" id="errorLogin" ref="errorLogin"></label><br>
                        <mdb-btn color="default" type="submit" rounded>Login</mdb-btn>
                    </div>
                </div>
                <div id="end" class="col-md-4"></div>
            </div>
        </div>
    </form>
</template>

<script>
    import {mdbInput, mdbBtn} from 'mdbvue';

    export default {
        components: {
            mdbInput,
            mdbBtn,
        },
        data() {
            return {
                errors: [],
                data: {
                    value: [],
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: {
                        "carteira": "",
                        "password": ""
                    }
                },
            }
        },
        methods: {
            addPost() {
                let uri = 'http://localhost:4000/login_user';
                this.axios
                    .post(uri, this.data.body, this.data.headers)
                    .then(response => {
                        this.data.value = response.data;
                        if (response.data["values"]) {
                            document.getElementById("errorLogin").innerHTML  = "";
                            window.location.href = "/index";
                        } else {
                            document.getElementById("errorLogin").innerHTML  = "Registro não encontrado!";
                        }
                    })
                    .catch(errors => {
                        this.errors.push(errors);
                    });
            }
        }
    }
</script>

<style>
    #middle {
        padding-top: 20%;
        height: 100%;
    }
</style>
<template>
    <form @submit.prevent="onSubmit">
        <div class="container-fluid">
            <div class="row">
                <div id="start" class="col-md-4"></div>

                <div id="middle" class="col-md-4">
                    <p class="h4 text-center mb-4">Login</p>
                    <div class="grey-text">
                        <mdb-input label="Carteira" icon="address-card" type="text" v-model="data.body.carteira"
                                   required></mdb-input>
                        <mdb-input label="Senha" icon="lock" type="password" v-model="data.body.password"
                                   required></mdb-input>
                    </div>

                    <div class="text-center">
                        <br>
                        <div id="alert-box-log" style="visibility: hidden">
                            <strong style="color: red">Registro não encontrado!</strong>
                        </div>
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
    import {signIn} from '../../auth/auth';

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
            async onSubmit() {
                await signIn(this.data.body.carteira, this.data.body.password).then(res => {
                    if (res) {
                        document.getElementById("alert-box-log").style.visibility = "hidden";
                        this.$parent.token = res;
                    } else {
                        document.getElementById("alert-box-log").style.visibility = "visible"
                    }
                });
            }
        }
    }
</script>
<style src="./login.css" lang="css"></style>
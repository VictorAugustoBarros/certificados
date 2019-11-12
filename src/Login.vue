<template>
    <section class="form-simple">
        <form @submit.prevent="addPost">
            <mdb-row>
                <mdb-col md="5">
                    <mdb-card>
                        <div class="header pt-3 grey lighten-2">
                            <mdb-row class="d-flex justify-content-start">
                                <h3 class="deep-grey-text mt-3 pb-1 mx-5">Login</h3>
                            </mdb-row>
                        </div>
                        <mdb-card-body class="mx-4 mt-4">
                            <mdb-input label="Carteira" v-model="data.body.carteira" type="text" required/>
                            <mdb-input label="Senha" v-model="data.body.password" type="password" containerClass="mb-0" />

                            <p class="font-small grey-text d-flex justify-content-end">Forgot
                                <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a>
                            </p>

                            <div class="text-center mb-4 mt-5">
                                <mdb-btn color="success" type="button" class="btn-block z-depth-2">Log in</mdb-btn>
                            </div>

                            <p class="font-small grey-text d-flex justify-content-center">Don't have an account?
                                <a href="#" class="dark-grey-text font-weight-bold ml-1">Sign up</a>
                            </p>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </form>
    </section>
</template>

<script>
    import {mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon} from 'mdbvue';

    export default {
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
                        // eslint-disable-next-line no-console
                        if (response.data["values"]) {
                            window.location.href = "/index";
                        } else {
                            alert("Registro não encontrado!");
                        }
                    })
                    .catch(errors => {
                        this.errors.push(errors);
                    });
            }
        },
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbInput,
            mdbBtn,
            // eslint-disable-next-line vue/no-unused-components
            mdbIcon
        }
    }
</script>

<style>
    .form-simple .font-small {
        font-size: 0.8rem;
    }

    .form-simple .header {
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }

    .form-simple input[type=text]:focus:not([readonly]) {
        border-bottom: 1px solid #ff3547;
        -webkit-box-shadow: 0 1px 0 0 #ff3547;
        box-shadow: 0 1px 0 0 #ff3547;
    }

    .form-simple input[type=text]:focus:not([readonly]) + label {
        color: #4f4f4f;
    }

    .form-simple input[type=password]:focus:not([readonly]) {
        border-bottom: 1px solid #ff3547;
        -webkit-box-shadow: 0 1px 0 0 #ff3547;
        box-shadow: 0 1px 0 0 #ff3547;
    }

    .form-simple input[type=password]:focus:not([readonly]) + label {
        color: #4f4f4f;
    }
</style>
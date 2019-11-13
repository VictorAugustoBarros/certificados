<template>
    <div>
        <Navigation></Navigation>
        <br><br>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4"></div>

                <div class="col-md-4 text-center">
                    <h3>Cadastro Usuário</h3>
                    <br>
                    <form @submit.prevent="insUsuario">
                        <div>
                            <label for="cd_carteira" class="grey-text" >Carteira
                                <input type="text" id="cd_carteira" class="form-control">
                            </label>
                            <br><br>
                            <label for="senha" class="grey-text">Senha
                                <input type="text" id="senha" class="form-control">
                            </label>
                        </div>
                        <br>
                        <div>
                            <label class="grey-text">Administrador
                                <div class="radioClass">
                                    <!-- Group of default radios - option 1 -->
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="admSim"
                                               name="groupOfDefaultRadios">
                                        <label class="custom-control-label" for="admSim">Sim</label>
                                    </div>

                                    <!-- Group of default radios - option 2 -->
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="admNao"
                                               name="groupOfDefaultRadios" checked>
                                        <label class="custom-control-label" for="admNao">Não</label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <br>
                        <div class="text-center">
                            <mdb-btn color="default" type="submit" rounded>Cadastrar</mdb-btn>
                        </div>
                    </form>
                </div>

                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "./Navigation";
    import {mdbBtn} from 'mdbvue';


    export default {
        name: "inserirUsuarios",
        components: {
            Navigation,
            mdbBtn
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
            insUsuario() {
                let admin = "";
                if (document.getElementById('admSim').checked) {
                    admin = "S"
                } else {
                    admin = "N"
                }

                let data = {
                    "carteira": document.getElementById("cd_carteira").value,
                    "password": document.getElementById("senha").value,
                    "admin": admin
                };

                let uri = "http://localhost:4000/ins_user";
                this.axios
                    .post(uri, data, this.data.headers)
                    .then(response => {
                        this.data.value = response.data;
                        if (response.data["status"] === "success") {
                            alert("Usuário cadastrado com sucesso!");
                            this.$router.push({path: '/listar_usuarios'});

                        } else {
                            alert("Erro ao cadastrar usuário!");
                            this.$router.push({path: '/listar_usuarios'});
                        }
                    })
                    .catch(errors => {
                        this.errors.push(errors);
                    });
            }
        }
    }
</script>

<style scoped>
</style>
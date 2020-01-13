import Navigation from "../navigation/Navigation";
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

            let uri = "http://localhost:4001/ins_user";
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
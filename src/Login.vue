<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="addPost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Carteira:</label>
                        <input type="text" class="form-control" v-model="data.body.carteira" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" class="form-control" v-model="data.body.password" required>
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
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
                        if(response.data["Values"]){
                            window.location.href = "/index";
                        }else{
                            alert(response.data["Mensagem"])
                        }
                    })
                    .catch(errors => {
                        this.errors.push(errors);
                    });
            }
        }
    }
</script>
import {mdbDatatable} from 'mdbvue';
import Navigation from "../navigation/Navigation";

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
                    },{
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
                for (let x in response.data.values){
                    this.registros.rows.push(response.data.values[x]);
                }
            })
            .catch(errors => {
                this.errors.push(errors);
            });
    }
}
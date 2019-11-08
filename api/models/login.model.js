const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Login = new Schema({
    carteira: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
});

Login.methods.findUser = function () {
    let result = Login.find({carteira: this.carteira})
        ? "Result is " + result
        : "Registro não encontrado";

    console.log(result);
};

module.exports = mongoose.model('Login', Login);
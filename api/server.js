const cors = require('cors');
const config = require('./config/DB.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4001;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => {
        console.log('Sucesso ao se conectar ao MongoDB')
    },
    err => {
        console.log('[Error] Falha ao se conectar ao mongoDB' + err)
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes.js').attach(app);

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});
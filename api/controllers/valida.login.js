const Login = require('../models/login.model.js');

exports.validateUser = async (req, res,) => {
    let login = new Login(req.body);

    let values = await Login.findOne({
        'carteira': login["carteira"],
        'password': login["password"]

    }, function (err, result) {
        if (err) throw new Error(err);
        return (result)
    });

    if (values) {
        console.log(values);
        return res.status(200).send({"message": "Registro encontrado com sucesso !", "values": values});

    } else {
        console.log({"Mensagem": "Registro não encontrado !"});
        return res.status(200).send({"message": "Registro não encontrado !", "values": ""});
    }
};

exports.getUsers = async (req, res,) => {
    let users = await Login.find({}, function (err, result) {
        if (err) throw new Error(err);
        return (result)
    });

    if (users) {
        console.log(users);
        return res.status(200).send({"message": "Registros encontrados com sucesso !", "values": users});

    } else {
        console.log({"Mensagem": "Registros não encontrados !"});
        return res.status(200).send({"message": "Registros não encontrados !", "values": ""});
    }
};
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
        return res.status(200).send({"message": "Registro encontrado com sucesso !", "values": values});

    } else {
        return res.status(200).send({"message": "Registro não encontrado !", "values": ""});
    }
};

exports.getUsers = async (req, res,) => {
    let users = await Login.find({}, function (err, result) {
        if (err) throw new Error(err);
        return (result)
    });

    // eslint-disable-next-line no-console
    console.log(users);

    if (users) {
        return res.status(200).send({"message": "Registros encontrados com sucesso !", "values": users});

    } else {
        return res.status(200).send({"message": "Registros não encontrados !", "values": ""});
    }
};

exports.insUser = async (req, res,) => {

    return new Promise(function (resolve, reject) {
        return Login.create(req.body, function (err) {
            if (err){
                reject(new Error(err));
            }
            resolve("success")
        });
    }).then(result => {
        return res.status(200).send(result["_id"]);

    }).catch(err => {
        return res.status(200).send({
            "message": "Erro ao cadastrar usuário!",
            "status": "failed",
            "error": err
        });
    });
};
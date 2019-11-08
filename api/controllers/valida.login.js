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
        return res.status(200).send(values);

    } else {
        console.log({"Mensagem": "Registro não encontrado !"});
        return res.status(400).send({"Mensagem": "Registro não encontrado !"});
    }
};
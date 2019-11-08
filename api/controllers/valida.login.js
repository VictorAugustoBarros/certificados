const Login = require('../models/login.model.js');

exports.validateUser = async (req, res,) => {
    let login = new Login(req.body);

    let values = await Login.findOne({
        'carteira': login["carteira"],
        'password': login["password"]

    }, function (err, result) {
        if (err) return handleError(err);
        return (result)
    });

    if (values) {
        console.log(values);
        return values;

    } else {
        console.log({"Mensagem": "Registro não encontrado !"});
    }
};
const validaLogin = require('./controllers/valida.login');

exports.attach = (server) => {
    server.post('/login_user', validaLogin.validateUser);
};

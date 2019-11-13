const validaLogin = require('./controllers/valida.login');

exports.attach = (server) => {
    server.post('/login_user', validaLogin.validateUser);
    server.post('/get_users', validaLogin.getUsers);
    server.post('/ins_user', validaLogin.insUser);
};

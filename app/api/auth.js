var mongoose = require('mongoose');
var jwt  = require('jsonwebtoken'); 

module.exports = function(app) {

     var api = {};
     var model = mongoose.model('Usuario'); 
     
      /*Autênticando login e senha do usuário */

     api.autentica = function(req, res) {

         model.findOne({
             login: req.body.login,
             senha: req.body.senha
         })
         .then(function(usuario) {
             if (!usuario) {
                 console.log('Login/senha inválidos');
                 res.sendStatus(401);
             } else {
                console.log(usuario.login)
                 var token = jwt.sign({login: usuario.login}, app.get('secret'), {
                     expiresIn: 84600
                 });
                 console.log('Autenticado: token adicionado na resposta');
                 res.set('x-access-token', token); 
                 res.end(); 
             }
         });
     };

    api.verificaToken = function(req, res, next) {

         var token = req.headers['x-access-token'];
  /*Mensagem de sucesso ou falha caso a autentificação tenha ocorrido com sucesso ou não */
         if (token) {
             console.log('Token recebido, decodificando');
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     console.log('Token rejeitado');
                     return res.sendStatus(401);
                 } else {
                     console.log('Token aceito')
                     req.usuario = decoded;    
                     next();
                  }
            });
        } else {
            console.log('Nenhum token enviado');
            return res.sendStatus(401);
          }
    }

    return api;
};

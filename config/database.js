module.exports = function(uri) {
/*Mensagens no log informando conexão, erro e desconexão no banco de dados */
	var mongoose = require('mongoose');

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('Conectado ao MongoDB')
	});

	mongoose.connection.on('error', function(error) {
		console.log('Erro na conexão: ' + error);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('Desconectado do MongoDB')
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Aplicação terminada, conexão fechada')
			process.exit(0);
		});
		
	})
};



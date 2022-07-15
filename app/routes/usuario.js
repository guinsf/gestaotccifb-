module.exports = function(app) {
	
	var api = app.api.usuario;

	app.route('/v1/usuarios')
		.post(api.adiciona);

};
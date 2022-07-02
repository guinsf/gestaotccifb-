module.exports = function(app) {
	
	var api = app.api.orientador;
	app.get('/v1/orientadores', api.lista);

	// app.route('/v1/orientadores')
	// 	.get(api.lista);
};
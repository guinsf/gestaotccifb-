module.exports = function(app) {
	
	var api = app.api.prof;

	app.route('/v1/profs')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/profs/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};
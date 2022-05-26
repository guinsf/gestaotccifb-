var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
	},
	curriculo: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true
	},
	telefone: {
		type: Number,
		required: true
	},
	grupo: {
		type: Number,
		required: true
	}
});

mongoose.model('Prof', schema);

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
	nome: {
		type: String,
		required: true
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
	},
	orientador: {
		type: Object,
		required: true
	}
	
});

mongoose.model('Foto', schema);
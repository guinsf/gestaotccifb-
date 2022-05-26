var api = {}

api.lista = function(req, res) {

    var grupos = [
    	{ _id: 1, nome: 'Desenvolvimento' }, 
        { _id: 2, nome: 'Pesquisa' }, 
        { _id: 3, nome: 'Infraestrutura' },
        { _id: 4, nome: 'Redes de computadores' }, 
        { _id: 5, nome: 'Projeto TCC' }, 
        { _id: 6, nome: 'Outros(cite da descrição)' }
    ];

    res.json(grupos)

};

module.exports = api;
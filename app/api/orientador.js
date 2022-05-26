var api = {}

api.lista = function(req, res) {

    var orientadores = [
    	{ _id: 1, nome: 'Paulinho José' }, 
        { _id: 2, nome: 'Maurico Zuca' }, 
        { _id: 3, nome: 'Osmar Ribeiro' },
        { _id: 4, nome: 'Juca Chaves' }, 
        { _id: 5, nome: 'Lucio Moura' }, 
        { _id: 6, nome: 'Outros ou ainda não possuo(cite da descrição)' }
    ];

    res.json(orientadores)

};

module.exports = api;
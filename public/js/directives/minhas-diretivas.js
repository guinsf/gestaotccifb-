/*Diretivas para funcionalidades do Angular*/ 

angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    /*Realizar as pesquisas no site*/
    .directive('pesqRel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
        ddo


		ddo.scope = {
            titulo: '@',
            orientador: '@'
        };

        ddo.templateUrl = 'js/directives/pesq-rel.html';

		return ddo;
	})
    /*Exibir as fotos cadastradas convertendo de url para foto*/
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" height="160" width="140">';           
        
        return ddo;
    })
      /*Exibindo botão de alerda*/
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
      /*Realizando pesquisa dentro dos relatórios*/
    .directive('meuRelatorios', function() {

        var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
            titulo: '@',
            nome:'@',
            orientador:'@',
            email:'@',
            telefone:'@',
            descricao:'@'
        };

        ddo.templateUrl = '/js/directives/meu-r.html';

		return ddo;
	});



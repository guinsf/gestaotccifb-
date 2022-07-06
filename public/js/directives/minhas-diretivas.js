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



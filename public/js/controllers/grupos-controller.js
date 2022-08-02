angular.module('alurapic')
/*Obtendo informações de grupos de áreas de interesses cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
	.controller('GruposController', function($scope, $http) {
		$http.get('/v1/grupos')
			.success(function(grupos) {
			$scope.grupos = grupos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});

angular.module('alurapic')
	.controller('ProfController', function($scope, recursoProf, $routeParams, cadastroDeProfs) {

		$scope.prof = {};
		$scope.mensagem = '';

		if($routeParams.profId) {
			recursoProf.get({profId: $routeParams.profId}, function(prof) {
				$scope.prof = prof; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o TCC'
			});
		}

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				cadastroDeProfs.cadastrar($scope.prof)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.prof = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});
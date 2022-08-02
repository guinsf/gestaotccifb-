angular.module('alurapic')
	.controller('ProfController', function($scope, recursoProf, $routeParams, cadastroDeProfs) {

		$scope.prof = {};
		$scope.mensagem = '';
/*Obtendo informações de professores cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
		if($routeParams.profId) {
			recursoProf.get({profId: $routeParams.profId}, function(prof) {
				$scope.prof = prof; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o TCC'
			});
		}
/*Incluindo informações de professores cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
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

angular.module('alurapic')
	.controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

		$scope.foto = {};
		$scope.mensagem = '';
/*Obtendo informações de trabalhos cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
		if($routeParams.fotoId) {
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
				$scope.foto = foto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o TCC'
			});
		}
/*Incluindo informações de trabalhos cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				cadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});

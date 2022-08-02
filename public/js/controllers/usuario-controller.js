angular.module('alurapic')
	.controller('UsuarioController', function($scope, recursoUsuario, $routeParams, cadastroDeUsuarios) {

		$scope.usuario = {};
		$scope.mensagem = '';

		if($routeParams.usuarioId) {
			recursoUsuario.get({usuarioId: $routeParams.usuarioId}, function(usuario) {
				$scope.usuario = usuario; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o usuário'
			});
		}
/*Cadastrando informações de novos usuários e sinalizando mensagem de erro caso ocorra*/
		$scope.novoUsuario = function() {
				cadastroDeUsuarios.cadastrar($scope.usuario)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.usuario = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
		};
	});

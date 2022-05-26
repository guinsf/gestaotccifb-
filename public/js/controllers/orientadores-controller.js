angular.module('alurapic')
	.controller('OrientadoresController', function($scope, $http) {
		$http.get('/v1/orientadores')
			.success(function(orientadores) {
			$scope.orientadores = orientadores;
			console.log(orientadores);
		})
		.error(function(erro) {
			console.log(erro);
		});
	});
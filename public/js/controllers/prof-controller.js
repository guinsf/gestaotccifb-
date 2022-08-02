angular.module('alurapic').controller('ProfsController', function($scope, recursoProf) {
	
	$scope.profs = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoProf.query(function(profs) {
		$scope.profs = profs;
	}, function(erro) {
		console.log(erro);
	});
/*Removendo informações de profs cadastrados pelo controller e sinalizando mensagem de erro caso ocorra*/
	$scope.remover = function(prof) {

		recursoProf.delete({profId: prof._id}, function() {
			var indiceDaprof = $scope.profs.indexOf(prof);
			$scope.profs.splice(indiceDaprof, 1);
			$scope.mensagem = 'prof ' + prof.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o TCC ' + prof.titulo;
		});
	};

});

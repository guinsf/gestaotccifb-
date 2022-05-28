angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {


		$httpProvider.interceptors.push('tokenInterceptor');
		
		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/profs', {
			templateUrl: 'partials/PrincipalProfs.html',
			controller: 'ProfsController'
		});

		$routeProvider.when('/profs/new', {
			templateUrl: 'partials/prof.html',
			controller: 'ProfController'
		});

		$routeProvider.when('/profs/edit/:profId', {
			templateUrl: 'partials/prof.html',
			controller: 'ProfController'
		});


		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });

		$routeProvider.when('/relatorioTCC', {
            templateUrl: 'partials/relatorio.html',
            controller: 'FotosController'
        });

		
		$routeProvider.otherwise({redirectTo: '/fotos'});

	});
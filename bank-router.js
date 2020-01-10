(function () {
	'use strict';

	angular.module('BankAppDemo')
	.config(RoutesConfig);

	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('/',{
			url: '/',
			templateUrl: 'index.html'
		})
		.state('accountSummary',{
			url: '/accountSummary',
			templateUrl: 'templates/user-account.template.html'
		});
	}

})();
(function () {
	'use strict';

	angular.module('BankAppDemo')
	.config(RoutesConfig);

	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('home');

		$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'templates/home.html'
		})
		.state('NRI',{
			url: '/NRI',
			templateUrl: 'templates/nri.html'
		})
		.state('Personal',{
			url: '/Personal',
			templateUrl: 'templates/user-login.template.html'
		})
		.state('Business',{
			url: '/Business',
			templateUrl: 'templates/business.html'
		})
		.state('accountSummary',{
			url: '/accountSummary',
			templateUrl: 'templates/user-account.template.html'
		})
		.state('getUserId',{
			url:"/getUserId",
			templateUrl:"templates/get-user.template.html"
		})
		.state('getPassword',{
			url:"/getPassword",
			templateUrl:"templates/get-password.template.html"
		})
		.state('TroubleLogging',{
			url:"/TroubleLogging",
			templateUrl:"templates/trouble-logging.template.html"
		})
		.state('OnlineDemo',{
			url:"/OnlineDemo",
			templateUrl:"templates/online-demo.template.html"
		});
	}

})();

(function () {
	'use strict';
	angular.module('BankAppDemo')
	.controller('subMenuController',subMenuController);

	subMenuController.$inject=['configService'];
	function subMenuController(configService){
		var $ctrl=this;
		$ctrl.subMenuCfgDetails=[];
		$ctrl.$onInit=function(){
			$ctrl.promise=configService.getCfgDetails();
			$ctrl.promise.then(function(cfgData){
			$ctrl.subMenuCfgDetails=cfgData.data;
			})
			.catch(function (error) {
				console.log("Failed to read configfile");
			});
		};
	}
})();
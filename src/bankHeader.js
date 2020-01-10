(function(){
	'use strict';
angular.module('BankAppDemo')
.controller('headerController',headerController);

  headerController.$inject=['configService'];
  function headerController(configService){
    var $ctrl=this;
    $ctrl.headerCfgDetails=[];
    $ctrl.$onInit=function(){
      $ctrl.promise=configService.getCfgDetails();
      $ctrl.promise.then(function(cfgData){
        $ctrl.headerCfgDetails=cfgData.data;
      })
      .catch(function (error) {
        console.log("Failed to read configfile");
      });
    };
  }
})();

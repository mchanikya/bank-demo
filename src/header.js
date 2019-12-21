(function(){
  'use strict';

  angular.module('BankAppDemo')
  .controller('headerController',headerController);
  headerController.$inject=['configService']
  function headerController(configService){
    var $ctrl=this;
    $ctrl.$onInit=function(){
      // configService.readCfgDetails();
      $ctrl.headMenuList=configService.getCfgDetails();
      console.log($ctrl.headMenuList);
    };

  }

})();

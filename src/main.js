(function(){
  'use strict';

  angular.module('BankAppDemo',['ui.router'])
  .component('bankHeader',{
    templateUrl:'templates/bank-header.template.html',
    controller:'headerController as hCtrl'
  })
  .component('bankSubMenu',{
    templateUrl:'templates/bank-sub-menu.template.html',
    controller:'subMenuController as sMCtrl'
  })
  .component('userLogin',{
    templateUrl:'templates/user-login.template.html'
  })
  .component('bankBody',{
    templateUrl:'templates/bank-body.template.html'
  })
  .service('configService',configService);



  configService.$inject=['$http'];
  function configService($http) {
    var service=this;
    service.configDetails=[];

    service.getCfgDetails=function(){
      return $http.get('config/website-details.json');
    };
  }

})();

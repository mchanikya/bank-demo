(function(){
  'use strict';

  angular.module('BankAppDemo',[])
  .component('bankHeader',{
    templateUrl:'templates/bank-header.template.html',
    controller:'headerController as hCtrl'
  })
  .controller('headerController',headerController)
  .component('bankSubMenu',{
    templateUrl:'templates/bank-sub-menu.template.html'
  })
  .component('userLogin',{
    templateUrl:'templates/user-login.template.html'
  })
  .component('bankBody',{
    templateUrl:'templates/bank-body.template.html'
  })
  .service('configService',configService);

  headerController.$inject=['configService']
  function headerController(configService){
    var $ctrl=this;
    $ctrl.$onInit=function(){
      configService.getCfgDetails();
    };
  }

  configService.$inject=['$http'];
  function configService($http) {
    var service=this;
    service.configDetails=[];

    service.getCfgDetails=function(){
      return service.configDetails;
    };

    service.promise=$http.get('config/website-details.json');
    service.promise.then(function(res){
      console.log(res);
      service.configDetails=res.data;
    })
    .catch(function() {
      console.log("Failed to read configuration details");
    });
  }

})();

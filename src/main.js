(function(){
  'use strict';

  angular.module('BankAppDemo',[])
  .component('bankHeader',{
    templateUrl:'templates/bank-header.template.html'
  })
  .component('bankSubMenu',{
    templateUrl:'templates/bank-sub-menu.template.html'
  })
  .component('userLogin',{
    templateUrl:'templates/user-login.template.html'
  })
  .component('bankBody',{
    templateUrl:'templates/bank-body.template.html'
  });

})();

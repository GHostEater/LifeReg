(function() {
  'use strict';

  angular
    .module('lifeReg')
    .run(runBlock);

  /** @ngInject */
  function runBlock(User,$location) {
      if(!User.profile.loggedIn){
          $location.url('/');
      }
  }

})();

/**
 * Created by GHostEater on 20-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .controller("HeaderController",function(User,$window){
        var vm = this;
        vm.user = User.profile;

        vm.logOut = function(){
            User.logOut();
            $window.location.reload();
        };
    })
})();
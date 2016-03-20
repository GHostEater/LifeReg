/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
angular.module('profiles')
    .controller('AdminAddController',function(Admin,toastr,$modalInstance){
        var vm = this;

        vm.ok = function(){
            if(vm.form.$valid){
                Admin.add(vm.username,vm.password,vm.name)
                    .then(function(){
                        toastr.success("Admin Added");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Unable to Add Admin");
                    });
            }
            else{
                toastr.error("Errors in form");
            }
        };
    });
})();
/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
    angular.module('hospital')
        .controller("AddController",function(Hospital,toastr,$modalInstance){
            var vm = this;

            vm.ok = function(){
                if(vm.form.$valid){
                    Hospital.add(vm.hospital.name)
                        .then(function(){
                            toastr.success("Hospital Added");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Add Hospital");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();
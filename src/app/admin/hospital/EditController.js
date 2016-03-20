/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
    angular.module('hospital')
        .controller("EditController",function(Hospital,id,toastr,$modalInstance){
            var vm = this;

            Hospital.getOne(id)
                .then(function(data){
                    vm.hospital = data;
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    Hospital.edit(id,vm.hospital.name)
                        .then(function(){
                            toastr.success("Hospital Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change Hospital");
                        });
                }
                else if(vm.form.$pristine && vm.form.$valid){
                    toastr.info("No Changes");
                    $modalInstance.close();
                }
                else if(vm.form.$invalid){
                    toastr.error("Errors in form");
                }
            };
        });
})();
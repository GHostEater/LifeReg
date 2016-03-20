/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('AdminEditController',function(Admin,toastr,id,$modalInstance){
            var vm = this;

            Admin.getOne(id)
                .then(function(data){
                    vm.admin = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect");
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    Admin.edit(id,vm.admin.username,vm.admin.password,vm.admin.name)
                        .then(function(){
                            toastr.success("Admin Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change Admin");
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
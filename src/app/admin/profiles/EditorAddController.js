/**
 * Created by GHostEater on 07-Mar-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('EditorAddController',function(Editor,Hospital,toastr,$modalInstance){
            var vm = this;

            vm.hospital_id = "";
            vm.sex= "";

            Hospital.getAll()
                .then(function(data){
                    vm.hospitals = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect to Server");
                });

            vm.ok = function(){
                if(vm.form.$valid){
                    Editor.add(vm.username,vm.password,vm.email,vm.name,vm.sex,vm.date_birth,vm.hospital_id)
                        .then(function(){
                            toastr.success("Editor Added");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Add Editor");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();
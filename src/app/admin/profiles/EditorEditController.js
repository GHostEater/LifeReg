/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('EditorEditController',function(Editor,id,Hospital,toastr,$modalInstance){
            var vm = this;

            Editor.getOne(id)
                .then(function(data){
                    vm.editor = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect");
                });

            Hospital.getAll()
                .then(function(data){
                    vm.hospitals = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect to Server");
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    Editor.edit(id,vm.editor.username,vm.editor.password,vm.editor.email,vm.editor.name,
                        vm.editor.sex,vm.editor.date_birth,vm.editor.hospital_id)
                        .then(function(){
                            toastr.success("Editor Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change Editor");
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
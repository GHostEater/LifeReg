/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module('birthReg')
        .controller("EditBirthController",function(BirthReg,Hospital,toastr,$modalInstance,id){
            var vm = this;

            Hospital.getAll()
                .then(function(data){
                    vm.hospitals = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect to Server");
                });

            BirthReg.getOne(id)
                .then(function(data){
                    vm.birth = data;
                })
                .catch(function(){
                    toastr.error("Unable to Connect To Server");
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    BirthReg.edit(id,vm.birth.first_name,vm.birth.last_name,vm.birth.sex,vm.birth.hair_colour,
                        vm.birth.complexion,vm.birth.date_birth,vm.birth.time_birth,vm.birth.father_name,
                        vm.birth.father_address,vm.birth.mother_name,vm.birth.mother_address,vm.birth.hospital_id)
                        .then(function(){
                            toastr.success("Birth Edited");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Register Birth");
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
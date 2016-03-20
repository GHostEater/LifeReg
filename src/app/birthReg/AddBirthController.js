/**
 * Created by GHostEater on 09-Mar-16.
 */
(function () {
    'use strict';
    angular.module('birthReg')
        .controller("AddBirthController",function(BirthReg,Hospital,toastr,$modalInstance){
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
                    BirthReg.add(vm.first_name,vm.last_name,vm.sex,vm.hair_colour,vm.complexion,vm.date_birth,
                        vm.time_birth,vm.father_name,vm.father_address,vm.mother_name,vm.mother_address,vm.hospital_id)
                        .then(function(){
                            toastr.success("Birth Registered");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Register Birth");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();
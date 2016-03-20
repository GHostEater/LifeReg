/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module('deathReg')
        .controller("AddDeathController",function(DeathReg,Hospital,toastr,$modalInstance){
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
                    DeathReg.add(vm.first_name,vm.last_name,vm.sex,vm.hair_colour,vm.complexion,vm.date_birth,
                        vm.date_death,vm.time_death,vm.next_kin_name,vm.next_kin_address,vm.hospital_id)
                        .then(function(){
                            toastr.success("Death Registered");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Register Death");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();
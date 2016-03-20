/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module('deathReg')
        .controller("EditDeathController",function(id,DeathReg,Hospital,toastr,$modalInstance){
            var vm = this;

            Hospital.getAll()
                .then(function(data){
                    vm.hospitals = data;
                })
                .catch(function(){
                    toastr.warning("Could Not Connect to Server");
                });
            DeathReg.getOne(id)
                .then(function(data){
                    vm.death = data;
                })
                .catch(function(){
                    toastr.error("Unable to Connect To Server");
                });


            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    DeathReg.edit(id,vm.death.first_name,vm.death.last_name,vm.death.sex,vm.death.hair_colour,
                        vm.death.complexion,vm.death.date_birth,vm.death.date_death,vm.death.time_death,
                        vm.death.next_kin_name,vm.death.next_kin_address,vm.death.hospital_id)
                        .then(function(){
                            toastr.success("Death Edited");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Edit Death");
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
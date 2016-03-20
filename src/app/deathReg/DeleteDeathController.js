/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module('deathReg')
        .controller("DeleteDeathController",function(DeathReg,id,toastr,$modalInstance){
            var vm = this;
            vm.ok = function(){
                DeathReg.remove(id)
                    .then(function(){
                        toastr.success("Death Deleted");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Delete Not Completed");
                    });
            };
        });
})();
/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module('birthReg')
        .controller("DeleteBirthController",function(BirthReg,id,toastr,$modalInstance){
            var vm = this;
            vm.ok = function(){
                BirthReg.remove(id)
                    .then(function(){
                        toastr.success("Birth Deleted");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Delete Not Completed");
                    });
            };
        });
})();
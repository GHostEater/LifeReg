/**
 * Created by GHostEater on 21-Feb-16.
 */
(function () {
    'use strict';
    angular.module('hospital')
        .controller("DeleteController",function(Hospital,id,toastr,$modalInstance){
            var vm = this;
            Hospital.getOne(id)
                .then(function(data){
                    vm.hospital = data;
                });
            vm.ok = function(){
                Hospital.remove(id)
                    .then(function(){
                        toastr.success("Hospital Deleted");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Delete Not Completed");
                    });
            };
        });
})();
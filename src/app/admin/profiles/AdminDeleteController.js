/**
 * Created by GHostEater on 04-Mar-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('AdminDeleteController',function(Admin,id,toastr,$modalInstance){
            var vm = this;

            vm.ok = function(){
                Admin.remove(id)
                    .then(function(){
                        toastr.success("Admin Removed");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Unable to Remove Admin");
                    });
            };
        });
})();
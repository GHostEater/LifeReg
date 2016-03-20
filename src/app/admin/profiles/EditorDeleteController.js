/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('EditorDeleteController',function(Editor,id,toastr,$modalInstance){
            var vm = this;

            vm.ok = function(){
                Editor.remove(id)
                    .then(function(){
                        toastr.success("Editor Removed");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Unable to Remove Editor");
                    });
            };
        });
})();
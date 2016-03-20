/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
angular.module('editor')
    .controller("MyProfileController",function(Editor,User,toastr,ngProgressFactory,$modal){
        var vm = this;
        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        Editor.getOne(User.profile.user_id)
            .then(function(data){
                vm.user = data;
                vm.progress.complete();
            })
            .catch(function(){
                toastr.warning("Could Not Connect To Server");
                vm.progress.complete();
            });

        vm.edit = function(id){
            var options = {
                templateUrl: 'app/admin/profiles/editorEdit.html',
                controller: "EditorEditController",
                controllerAs: 'model',
                size: 'lg',
                resolve:{
                    id: function(){
                        return id;
                    }
                }
            };
            $modal.open(options).result
                .then(function(){
                    vm.progress.start();
                    Editor.getOne(User.profile.user_id)
                        .then(function(data){
                            vm.user = data;
                            vm.progress.complete();
                        })
                        .catch(function(){
                            toastr.warning("Could Not Connect To Server");
                            vm.progress.complete();
                        });
                });
        };
    });
})();
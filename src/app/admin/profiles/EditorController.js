/**
 * Created by GHostEater on 04-Mar-16.
 */
(function () {
    'use strict';
    angular.module('profiles')
        .controller('EditorController',function(Editor,Hospital,toastr,$modal,ngProgressFactory){
            var vm = this;

            vm.progress = ngProgressFactory.createInstance();
            vm.progress.setColor('yellow');
            vm.progress.setHeight('4px');
            vm.progress.start();

            Editor.getAll()
                .then(function(data){
                    vm.editors = data;
                    vm.progress.complete();
                })
                .catch(function(){
                    vm.progress.complete();
                    toastr.warning("Could Not Connect To Server");
                });
            vm.add = function(){
                var options = {
                    templateUrl: 'app/admin/profiles/editorAdd.html',
                    controller: "EditorAddController",
                    controllerAs: 'model',
                    size: 'lg'
                };
                $modal.open(options).result
                    .then(function(){
                        vm.progress.start();
                        Editor.getAll()
                            .then(function(data){
                                vm.editors = data;
                                vm.progress.complete();
                            })
                            .catch(function(){
                                toastr.warning("Could Not Connect To Server");
                                vm.progress.complete();
                            });
                    });
            };

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
                        Editor.getAll()
                            .then(function(data){
                                vm.progress.complete();
                                vm.editors = data;
                            })
                            .catch(function(){
                                vm.progress.complete();
                                toastr.warning("Could Not Connect To Server");
                            });
                    });
            };

            vm.remove = function(id){
                var options = {
                    templateUrl: 'app/admin/profiles/editorDelete.html',
                    controller: "EditorDeleteController",
                    controllerAs: 'model',
                    size: 'sm',
                    resolve:{
                        id: function(){
                            return id;
                        }
                    }
                };
                $modal.open(options).result
                    .then(function(){
                        vm.progress.start();
                        Editor.getAll()
                            .then(function(data){
                                vm.progress.complete();
                                vm.editors = data;
                            })
                            .catch(function(){
                                vm.progress.complete();
                                toastr.warning("Could Not Connect To Server");
                            });
                    });
            };
        });
})();
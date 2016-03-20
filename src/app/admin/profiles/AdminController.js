/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
angular.module('profiles')
    .controller('AdminController',function(Admin,toastr,$modal,ngProgressFactory){
        var vm = this;

        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        Admin.getAll()
            .then(function(data){
                vm.admins = data;
                vm.progress.complete();
            })
            .catch(function(){
                vm.progress.complete();
                toastr.warning("Could Not Connect To Server");
            });
        vm.add = function(){
            var options = {
                templateUrl: 'app/admin/profiles/adminAdd.html',
                controller: "AdminAddController",
                controllerAs: 'model',
                size: 'lg'
            };
            $modal.open(options).result
                .then(function(){
                    vm.progress.start();
                    Admin.getAll()
                        .then(function(data){
                            vm.admins = data;
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
                templateUrl: 'app/admin/profiles/adminEdit.html',
                controller: "AdminEditController",
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
                    Admin.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.admins = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };

        vm.remove = function(id){
            var options = {
                templateUrl: 'app/admin/profiles/adminDelete.html',
                controller: "AdminDeleteController",
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
                    Admin.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.admins = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };
    });
})();
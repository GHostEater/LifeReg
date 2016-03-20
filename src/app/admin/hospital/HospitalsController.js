/**
 * Created by GHostEater on 20-Feb-16.
 */
(function () {
    'use strict';
angular.module('hospital')
    .controller("HospitalsController",function(Hospital,toastr,ngProgressFactory,$modal){
        var vm = this;

        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        Hospital.getAll()
            .then(function(data){
                vm.hospitals = data;
                vm.progress.complete();
            })
            .catch(function(){
                vm.progress.complete();
                toastr.warning("Could Not Connect To Server");
            });
        vm.add = function(){
            var options = {
                templateUrl: 'app/admin/hospital/add.html',
                controller: "AddController",
                controllerAs: 'model',
                size: 'lg'
                };
            $modal.open(options).result
                .then(function(){
                    vm.progress.start();
                    Hospital.getAll()
                        .then(function(data){
                            vm.hospitals = data;
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
                templateUrl: 'app/admin/hospital/edit.html',
                controller: "EditController",
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
                    Hospital.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.hospitals = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };
        vm.remove = function(id){
            var options = {
                templateUrl: 'app/admin/hospital/delete.html',
                controller: "DeleteController",
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
                    Hospital.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.hospitals = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };
    });
})();
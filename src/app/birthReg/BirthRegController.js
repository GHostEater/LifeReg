/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
angular.module('birthReg')
    .controller("BirthRegController",function(BirthReg,User,toastr,ngProgressFactory,$modal){
        var vm = this;

        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        vm.user = User.profile;

        BirthReg.getAll()
            .then(function(data){
                vm.births = data;
                vm.progress.complete();
            })
            .catch(function(){
                toastr.warning("Could Not Connect To Server");
                vm.progress.complete();
            });
        vm.add = function(){
            var options = {
                templateUrl: 'app/birthreg/addBirth.html',
                controller: "AddBirthController",
                controllerAs: 'model',
                size: 'lg'
            };
            $modal.open(options).result
                .then(function(){
                    vm.progress.start();
                    BirthReg.getAll()
                        .then(function(data){
                            vm.births = data;
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
                templateUrl: 'app/birthreg/editBirth.html',
                controller: "EditBirthController",
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
                    BirthReg.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.births = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };
        vm.remove = function(id){
            var options = {
                templateUrl: 'app/birthreg/deleteBirth.html',
                controller: "DeleteBirthController",
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
                    BirthReg.getAll()
                        .then(function(data){
                            vm.progress.complete();
                            vm.births = data;
                        })
                        .catch(function(){
                            vm.progress.complete();
                            toastr.warning("Could Not Connect To Server");
                        });
                });
        };
    });
})();
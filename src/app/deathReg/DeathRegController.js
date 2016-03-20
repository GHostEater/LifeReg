/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
    angular.module('deathReg')
        .controller("DeathRegController",function(DeathReg,User,toastr,ngProgressFactory,$modal){
            var vm = this;

            vm.progress = ngProgressFactory.createInstance();
            vm.progress.setColor('yellow');
            vm.progress.setHeight('4px');
            vm.progress.start();

            vm.user = User.profile;

            DeathReg.getAll()
                .then(function(data){
                    vm.deaths = data;
                    vm.progress.complete();
                })
                .catch(function(){
                    toastr.warning("Could Not Connect To Server");
                    vm.progress.complete();
                });
            vm.add = function(){
                var options = {
                    templateUrl: 'app/deathreg/addDeath.html',
                    controller: "AddDeathController",
                    controllerAs: 'model',
                    size: 'lg'
                };
                $modal.open(options).result
                    .then(function(){
                        vm.progress.start();
                        DeathReg.getAll()
                            .then(function(data){
                                vm.deaths = data;
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
                    templateUrl: 'app/deathreg/editDeath.html',
                    controller: "EditDeathController",
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
                        DeathReg.getAll()
                            .then(function(data){
                                vm.progress.complete();
                                vm.deaths = data;
                            })
                            .catch(function(){
                                vm.progress.complete();
                                toastr.warning("Could Not Connect To Server");
                            });
                    });
            };
            vm.remove = function(id){
                var options = {
                    templateUrl: 'app/deathreg/deleteDeath.html',
                    controller: "DeleteDeathController",
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
                        DeathReg.getAll()
                            .then(function(data){
                                vm.progress.complete();
                                vm.deaths = data;
                            })
                            .catch(function(){
                                vm.progress.complete();
                                toastr.warning("Could Not Connect To Server");
                            });
                    });
            };
        });
})();
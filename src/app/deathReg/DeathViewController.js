/**
 * Created by GHostEater on 12-Mar-16.
 */
(function () {
    'use strict';
    angular.module("deathReg")
        .controller("DeathViewController",function(DeathReg,$stateParams,ngProgressFactory,toastr){
            var vm = this;

            vm.progress = ngProgressFactory.createInstance();
            vm.progress.setColor('yellow');
            vm.progress.setHeight('4px');
            vm.progress.start();

            DeathReg.getOne($stateParams.deathID)
                .then(function(data){
                    vm.death = data;
                    vm.progress.complete();
                })
                .catch(function(){
                    toastr.warning("Could Not Connect To Server");
                    vm.progress.complete();
                });
        });
})();
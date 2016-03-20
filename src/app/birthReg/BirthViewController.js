/**
 * Created by GHostEater on 09-Mar-16.
 */
(function () {
    'use strict';
angular.module("birthReg")
    .controller("BirthViewController",function(BirthReg,$stateParams,ngProgressFactory,toastr){
        var vm = this;

        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        BirthReg.getOne($stateParams.birthID)
            .then(function(data){
                vm.birth = data;
                vm.progress.complete();
            })
            .catch(function(){
                toastr.warning("Could Not Connect To Server");
                vm.progress.complete();
            });
    });
})();
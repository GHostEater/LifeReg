/**
 * Created by GHostEater on 20-Feb-16.
 */
(function () {
    'use strict';
angular.module('admin')
    .controller("AdminHomeController",function(User,ngProgressFactory,LifeRegStats){
        var vm = this;

        vm.progress = ngProgressFactory.createInstance();
        vm.progress.setColor('yellow');
        vm.progress.setHeight('4px');
        vm.progress.start();

        vm.user = User.profile;
        vm.stats = LifeRegStats.stats;
        vm.progress.complete();
    });
})();
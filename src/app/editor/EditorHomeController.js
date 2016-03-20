/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
angular.module("editor")
    .controller("EditorHomeController",function(User,ngProgressFactory,LifeRegStats){
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
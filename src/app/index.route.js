(function() {
  'use strict';

  angular
    .module('lifeReg')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login',{url:'/',templateUrl:'app/login.html'})
        .state('admin_home',{url:'/admin',templateUrl:'app/admin/adminHome.html'})
        .state('hospitals',{url:'/admin/hospitals',templateUrl:'app/admin/hospital/hospitals.html'})
        .state('profiles',{url:'/admin/profiles',templateUrl:'app/admin/profiles.html'})
            .state('admin_profiles',{parent:'profiles',url:'/admins',templateUrl:'app/admin/profiles/admin.html'})
            .state('editor_profiles',{parent:'profiles',url:'/editors',templateUrl:'app/admin/profiles/editor.html'})
        .state('editor_home',{url:'/editor',templateUrl:'app/editor/editorHome.html'})
        .state('my_profile',{url:'/editor/profile',templateUrl:'app/editor/myProfile.html'})
        .state('birthreg',{url:'/birthreg',templateUrl:'app/birthReg/birthReg.html'})
            .state('birthview',{url:'/birthreg/view/:birthID',templateUrl:'app/birthReg/birthView.html'})
        .state('deathreg',{url:'/deathreg',templateUrl:'app/deathReg/deathReg.html'})
            .state('deathview',{url:'/deathreg/view/:deathID',templateUrl:'app/deathReg/deathView.html'});

    $urlRouterProvider.otherwise('/');
  }

})();

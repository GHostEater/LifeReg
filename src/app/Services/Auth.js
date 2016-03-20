/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .factory("Auth",function($http,$q){
        var host = 'http://localhost/birth_reg_server';
        function adminLogin(username,password){
            return $http({
                    method: 'POST',
                    url: host+'/admin_login.php',
                    params:{
                        username: username,
                        password: password
                    }
            })
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
        }
        function editorLogin(username,password){
            return $http({
                method: 'POST',
                url: host+'/editor_login.php',
                params:{
                    username: username,
                    password: password
                }
            })
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        return{
            adminLogin: adminLogin,
            editorLogin: editorLogin
        };
    });
})();
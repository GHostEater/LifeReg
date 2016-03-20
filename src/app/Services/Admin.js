/**
 * Created by GHostEater on 26-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .factory('Admin',function($http,$q,lodash){
        var host = 'http://localhost/birth_reg_server';
        function getAll(){
            return $http.get(host+'/profiles/admin.php')
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function getOne(id){
            return $http.get(host+'/profiles/admin.php')
                .then(function(response){
                    return lodash.find(response.data,{'id':id});
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function add(username,password,name){
            return $http({
                method: 'POST',
                url: host+'/profiles/admin_add.php',
                params:{
                    username: username,
                    password: password,
                    name: name
                }
            })
                .then(function(response){
                    return response.status;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function edit(id,username,password,name){
            return $http({
                method: 'POST',
                url: host+'/profiles/admin_edit.php',
                params: {
                    id: id,
                    username: username,
                    password: password,
                    name: name
                }
            })
                .then(function(response){
                    return response.status;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function remove(id){
            return $http({
                method: 'POST',
                url: host+'/profiles/admin_delete.php',
                params: {
                    id: id
                }
            })
                .then(function(response){
                    return response.status;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        return{
            add: add,
            edit: edit,
            remove: remove,
            getOne: getOne,
            getAll: getAll
        }
    });
})();
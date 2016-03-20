/**
 * Created by GHostEater on 20-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .factory("Hospital",function($http,$q,lodash){
        var host = 'http://localhost/birth_reg_server';
        function getAll(){
            return $http.get(host+'/hospital/hospitals.php')
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function getOne(id){
            return $http.get(host+'/hospital/hospitals.php')
                .then(function(response){
                    return lodash.find(response.data,{'id':id});
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function add(name){
            return $http({
                method: 'POST',
                url: host+'/hospital/add.php',
                params:{
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
        function edit(id,name){
            return $http({
                method: 'POST',
                url: host+'/hospital/edit.php',
                params: {
                    id: id,
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
                url: host+'/hospital/delete.php',
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
            getAll: getAll,
            getOne: getOne,
            add: add,
            edit: edit,
            remove: remove
        }
    });
})();
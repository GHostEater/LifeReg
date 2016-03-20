/**
 * Created by GHostEater on 04-Mar-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .factory("Editor",function($http,$q,lodash){
        var host = 'http://localhost/birth_reg_server';
        function getAll(){
            return $http.get(host+"/profiles/editor.php")
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function getOne(id){
            return $http.get(host+'/profiles/editor.php')
                .then(function(response){
                    return lodash.find(response.data,{'id':id});
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function add(username,password,email,name,sex,date_birth,hospital_id){
            return $http({
                method: 'POST',
                url: host+'/profiles/editor_add.php',
                params:{
                    username: username,
                    password: password,
                    email: email,
                    name: name,
                    sex: sex,
                    date_birth: date_birth,
                    hospital_id: hospital_id
                }
            })
                .then(function(response){
                    return response.status;
                })
                .catch(function(response){
                    return $q.reject(response.status);
                });
        }
        function edit(id,username,password,email,name,sex,date_birth,hospital_id){
            return $http({
                method: 'POST',
                url: host+'/profiles/editor_edit.php',
                params: {
                    id: id,
                    username: username,
                    password: password,
                    email:email,
                    name: name,
                    sex: sex,
                    date_birth: date_birth,
                    hospital_id: hospital_id
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
                url: host+'/profiles/editor_delete.php',
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
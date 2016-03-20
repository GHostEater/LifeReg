/**
 * Created by GHostEater on 08-Mar-16.
 */
(function () {
    'use strict';
    angular.module('lifeReg')
        .factory("DeathReg",function($http,$q,lodash){
            var host = 'http://localhost/birth_reg_server';
            function getAll(){
                return $http.get(host+'/death/deaths.php')
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function getOne(id){
                return $http.get(host+'/death/deaths.php')
                    .then(function(response){
                        return lodash.find(response.data,{'id':id});
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function add(first_name,last_name,sex,hair_colour,complexion,date_birth,
                         date_death,time_death,next_kin_name,next_kin_address,hospital_id){
                return $http({
                    method: 'POST',
                    url: host+'/death/add.php',
                    params:{
                        first_name: first_name,
                        last_name: last_name,
                        sex: sex,
                        hair_colour: hair_colour,
                        complexion: complexion,
                        date_birth: date_birth,
                        date_death: date_death,
                        time_death: time_death,
                        next_kin_name: next_kin_name,
                        next_kin_address: next_kin_address,
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
            function edit(id,first_name,last_name,sex,hair_colour,complexion,date_birth,
                          date_death,time_death,next_kin_name,next_kin_address,hospital_id){
                return $http({
                    method: 'POST',
                    url: host+'/death/edit.php',
                    params: {
                        id: id,
                        first_name: first_name,
                        last_name: last_name,
                        sex: sex,
                        hair_colour: hair_colour,
                        complexion: complexion,
                        date_birth: date_birth,
                        date_death: date_death,
                        time_death: time_death,
                        next_kin_name: next_kin_name,
                        next_kin_address: next_kin_address,
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
                    url: host+'/death/delete.php',
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
                getOne: getOne,
                getAll: getAll,
                add: add,
                edit: edit,
                remove: remove
            }
        });
})();
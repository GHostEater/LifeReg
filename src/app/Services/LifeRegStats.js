/**
 * Created by GHostEater on 09-Mar-16.
 */
(function () {
    'use strict';
    angular.module('lifeReg')
        .factory("LifeRegStats",function(Admin,Editor,Hospital,BirthReg,DeathReg){
            function initialize(){
                var stats = {
                    admin: '',
                    editor: '',
                    hospital: '',
                    birthReg: '',
                    deathReg: ''
                };
                Admin.getAll()
                    .then(function(data){
                        stats.admin = data.length;
                    });
                Editor.getAll()
                    .then(function(data){
                        stats.editor = data.length;
                    });
                Hospital.getAll()
                    .then(function(data){
                        stats.hospital = data.length;
                    });
                BirthReg.getAll()
                    .then(function(data){
                        stats.birthReg = data.length;
                    });
                DeathReg.getAll()
                    .then(function(data){
                        stats.deathReg = data.length;
                    });
                return stats;
            }
            var allStats = initialize();
            return{
                stats: allStats
            }
        });
})();
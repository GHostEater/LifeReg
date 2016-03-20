/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .factory("User",function(localStorage){

        var USER_INFO = "user";

        function initialize(){
            var user = {
                username: '',
                name: '',
                user_id: '',
                type:'',
                hospital_id:'',
                get loggedIn(){
                    return this.user_id;
                }
            };
            var localUser = localStorage.get(USER_INFO);
            if(localUser){
                user.username = localUser.username;
                user.name = localUser.name;
                user.user_id = localUser.user_id;
                user.type = localUser.type;
                user.hospital_id = localUser.hospital_id;
            }
            return user;
        }

        function setUser(username,name,user_id,type,hospital_id){
            profile.username = username;
            profile.name = name;
            profile.user_id = user_id;
            profile.type = type;
            profile.hospital_id = hospital_id;

            localStorage.add(USER_INFO,profile);
        }

        function logOut(){
            localStorage.remove(USER_INFO);
        }

        var profile = initialize();

        return{
            profile: profile,
            setUser: setUser,
            logOut: logOut
        }
    });
})();
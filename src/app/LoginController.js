/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('lifeReg')
    .controller("LoginController",function(Auth,$location,User,toastr){
        var vm = this;
        vm.tell = "";
        vm.user = User.profile;
        if(vm.user.loggedIn && vm.user.type == "1"){
            $location.url('/admin');
        }
        else if(vm.user.loggedIn && vm.user.type == "2"){
            $location.url('/editor');
        }

        vm.loginSelect = function(user){
            if(user === 2){
                vm.tell = "editor";
            }
            else if(user === 1){
                vm.tell = "admin";
            }
        };

        vm.editorLogin = function(username,password){
            vm.userError = false;
            vm.passError = false;
            Auth.editorLogin(username,password)
                .then(function(data){
                    User.setUser(data.username,data.name,data.user_id,2,data.hospital_id);
                    toastr.success("Login Successful");
                    $location.url('/editor');
                })
                .catch(function(error){
                    if(error === 401){
                        toastr.error("Incorrect Username");
                        vm.userError = true;
                    }
                    else if(error === 402){
                        toastr.error("Incorrect Password");
                        vm.passError = true;
                    }
                    else{
                        toastr.warning("Could not Connect to Server");
                    }
                });
        };

        vm.adminLogin = function(username,password){
            vm.userError = false;
            vm.passError = false;
            Auth.adminLogin(username,password)
                .then(function(data){
                    User.setUser(data.username,data.name,data.user_id,1);
                    toastr.success("Login Successful");
                    $location.url('/admin');
                })
                .catch(function(error){
                    if(error === 401){
                        toastr.error("Incorrect Username");
                        vm.userError = true;
                    }
                    else if(error === 402){
                        toastr.error("Incorrect Password");
                        vm.passError = true;
                    }
                    else{
                        toastr.warning("Could not Connect to Server");
                    }
                });
        };
        vm.loginSelectReset = function(){
            vm.tell = "";
        };
    });
})();
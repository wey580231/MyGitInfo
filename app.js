/**
 * Created by wey580231 on 2017/1/12.
 */
'use strict';
angular.module("app", [
    'ngRoute',
    'app.login',
    'app.userInfo',
    'app.viewRepos'
    ])
    .config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider.otherwise({redirectTo: '/login'});
    }])
    .factory('httpService',['$http',function($http)
    {
        var defaultUrl = "https://api.github.com";
        var service = {};
        var userInfo = {};
        var uname;
        var _validateUser=function(userName)
        {
            return $http({
                url:defaultUrl+'/users/'+userName,
                method:'get'
            });
        };
        var _getUserName=function()
        {
            return uname;
        }
        var _setUserName = function(userName)
        {
            localStorage.setItem("userName",userName);
            this.uname = userName;
        }
        var _setUserInfo = function(uinfo)
        {
            this.userInfo = uinfo;
        }
        var _getUserInfo = function()
        {
            return this.userInfo;
        }
        var _getAllRepos = function()
        {
            return $http({
                url:defaultUrl+'/users/'+localStorage.getItem('userName')+'/repos',
                method:'get'
            });
        }
        service.validateUser=_validateUser;
        service.getUserName = _getUserName;
        service.setUserName = _setUserName;
        service.setUserInfo = _setUserInfo;
        service.getUserInfo = _getUserInfo;
        service.getAllRepos = _getAllRepos;
        return service;
    }]);
/**
 * Created by wey580231 on 2017/1/12.
 */
angular.module("app.userInfo", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/userInfo", {
            templateUrl: 'app/components/userInfo/userInfo.html',
            controller: 'userInfoCtrl'
        });
    }])
    .controller('userInfoCtrl', function ($scope,$location,httpService)
    {
        $scope.user = httpService.getUserInfo();
        $scope.viewRepos = function()
        {
            $location.url('/viewRepos');
        }
    });

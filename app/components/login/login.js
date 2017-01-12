/**
 * Created by wey580231 on 2017/1/12.
 */
angular.module("app.login", ['ngRoute','app.userInfo'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'app/components/login/login.html',
            controller: 'userLogin'
        })
    }])
    .controller("userLogin", function ($scope, $location, httpService) {
        $scope.startLogin = function () {
            httpService.validateUser($scope.user.name)
                .then(function (reponse)
                    {
                        httpService.setUserName($scope.user.name);
                        httpService.setUserInfo(reponse.data);
                        $location.url('/userInfo');
                    },
                    function (reponse)
                    {

                    });
        }
    });

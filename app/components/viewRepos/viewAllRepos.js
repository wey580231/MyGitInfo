/**
 * Created by wey580231 on 2017/1/12.
 */
angular.module("app.viewRepos", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewRepos', {
            templateUrl: 'app/components/viewRepos/viewAllRepos.html',
            controller: 'viewReposCtrl'
        });
    }])
    .controller('viewReposCtrl', function ($scope, httpService) {
        httpService.getAllRepos().then(function success(reponse) {
                $scope.repos = reponse.data;
            }
            , function error(reponse) {

            });
    });

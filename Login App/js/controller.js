var mainApp = angular.module('mainApp', ['ngRoute']);
// download angular js ngroute js on google
// use (['$routeProvider',function($routeProvider)]); if compressing your file
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {

            templateUrl: 'login.html'

        })
        .when('/dashboard', {
            resolve: {
                "check": function($location, $rootScope) {
                    if (!$rootScope.LoggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'dashboard.html'

        })
        .otherwise('/', {
            redirectTO: '/ '

        });
});
mainApp.controller('logincontrol', function($scope, $location, $rootScope) {
    $scope.submit = function() {

        if ($scope.username == 'admin' && $scope.password == 'admin') {

            $rootScope.LoggedIn = 'true';
            $location.path = ('/dashboard');
            // $rootScope.uname = $scope.username;
            // $rootScope.password = $scope.password;
        } else { alert('Wrong Stuff'); }
    };
});
// create the module and name it liquidLeanApp
var liquidLeanApp = angular.module('liquidLeanApp', ['ngRoute', 'ngStorage', 'firebase']);

// configure our routes
liquidLeanApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'views/landing/landing.html',
            controller: 'mainController'
        })

        .when('/home', {
            templateUrl: 'views/landing/landing.html',
            controller: 'mainController'
        })		

        .when('/contact', {
            templateUrl: 'views/contact.html'
            
        })
/*
        // route for the dashboard page
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
        })

        // route for the talent page
        .when('/talent', {
            templateUrl: 'views/talent.html',
            controller: 'talentController'
        })

        // route for the risk page
        .when('/assets', {
            templateUrl: 'views/assets.html'
            
        })
*/
        .when('/about', {
            templateUrl: 'views/about.html'
            
        })

        .when('/bankingApi', {
            templateUrl: 'views/bankingApi.html',
            controller: 'loginController'
        });
    $locationProvider.html5Mode(true);
});

liquidLeanApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    // create a message to display in our view
}]);

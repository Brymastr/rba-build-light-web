var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/lights', {
      templateUrl: 'views/lights.html',
      controller: 'LightsController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'ProjectsController'
    });
});
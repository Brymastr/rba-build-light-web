var app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {
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
    })
    .when('/lights/:id', {
      templateUrl: 'views/single-light.html',
      controller: 'SingleLightController'
    });

  $locationProvider.html5Mode(true);
});

app.constant('config', {
  'url': 'http://192.168.99.100',
  // 'url': 'http://localhost',
  'port': '9001'
});
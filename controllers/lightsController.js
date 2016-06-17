app.controller('LightsController', function($scope, $http, $timeout, $location) {
  $scope.lights = "Lights controller";
  const url = 'http://localhost:9001/api/lights';

  $('.half-page').css('width', '0%');
  $('#light-list').css('width', '100%');
  $timeout(function() {
    $('.half-page').css('width', '50%');
    $('.half-page').css('width', '');
  }, 0);
  
  $scope.newLightName;
  $scope.newLightIp;
  $scope.lights = [];

  $scope.goto = function(id) {
    $('.half-page').css('width', '0%');
    $('#new-light').css('width', '100%');
    $timeout(function() {
      $location.path('/lights/' + id);
    }, 500);
  };

  $scope.createLight = function() {
    var data = {
      name: $scope.newLightName,
      ip: $scope.newLightIp
    };
    $http.post(url, data, null).then(
      function(response) {
        $scope.goto(response.data._id);
      },
      function(response) {
        console.log('error');
      }
    );
  };

  $scope.fetchList = function() {
    $scope.lights = [];
    $http.get(url, null).then(
      function(response) {
        $scope.lights = response.data;
        console.log($scope.lights);
      },
      function(response) {
        console.log('error');
      }
    );
  };
  $scope.fetchList();
  
});
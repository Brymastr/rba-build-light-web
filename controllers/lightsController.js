app.controller('LightsController', function($scope, $http, $timeout) {
  $scope.lights = "Lights controller";
  const url = 'http://localhost:9001/api/lights'

  $('.half-page').css('width', '0%');
  $('#light-list').css('width', '100%');
  $timeout(function() {
    $('.half-page').css('width', '50%');
    $('.half-page').css('width', '');
  }, 0);
  
  $scope.newLightName;
  $scope.newLightIp;
  $scope.lights = [];

  $scope.createLight = function() {
    var data = {
      name: $scope.newLightName,
      ip: $scope.newLightIp
    }
    $http.post(url, data, null).then(
      function(response) {
        console.log('new light created');
      },
      function(response) {
        console.log('error');
      }
    );
  }

  $scope.fetchList = function() {
    $http.get(url, null).then(
      function(response) {
        $scope.lights = response.data;
      },
      function(response) {
        console.log('error');
      }
    );
  }
  $scope.fetchList();
});
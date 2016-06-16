app.controller('LightsController', function($scope, $http) {
  $scope.lights = "Lights controller";
  const url = 'http://localhost:9001/api/lights'
  
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
        console.log(response.data);
      },
      function(response) {
        console.log('error');
      }
    );
  }
});
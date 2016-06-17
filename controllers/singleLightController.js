app.controller('SingleLightController', function($scope, $routeParams, $http) {
  const url = 'http://localhost:9001/api'

  $scope.light;
  $scope.projects;

  $scope.selectProject = function(index) {
    if($scope.projects[index].selected)
      $scope.projects[index].selected = false;
    else
      $scope.projects[index].selected = true;
  }

  $scope.updateLight = function() {
    var data = {
      name: $scope.light.name,
      ip: $scope.light.ip
    }
    $http.patch(url + '/lights/' + $routeParams.id, data, null).then(
      function(response) {
        console.log('light updated');
      },
      function(response) {
        console.log('error');
      }
    );
  }

  $scope.fetchProjects = function() {
    $scope.projects = [];
    $http.get(url + '/projects/', null).then(
      function(response) {
        $scope.projects = response.data;
        console.log($scope.projects);
      },
      function(response) {
        console.log('error');
      }
    );
  }
  $scope.fetchProjects();

  $scope.fetchLight = function() {
    $scope.light = null;
    $http.get(url + '/lights/' + $routeParams.id, null).then(
      function(response) {
        $scope.light = response.data;
        console.log($scope.light);
      },
      function(response) {
        console.log('error');
      }
    );
  }
  $scope.fetchLight();

});
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

    var projectsToSave = [];
    for(p in $scope.projects) {
      if($scope.projects[p].selected) {
        projectsToSave.push($scope.projects[p]._id);
      }
    }
    console.log(projectsToSave);

    var data = {
      name: $scope.light.name,
      ip: $scope.light.ip,
      projects: projectsToSave
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
        for(p in response.data)
          if($scope.light.projects.indexOf(response.data[p]._id) > -1)
            response.data[p].selected = true;
        $scope.projects = response.data;
      },
      function(response) {
        console.log('error');
      }
    );
  }
  

  $scope.fetchLight = function() {
    $scope.light = null;
    $http.get(url + '/lights/' + $routeParams.id, null).then(
      function(response) {
        $scope.light = response.data;
        console.log($scope.light);
        $scope.fetchProjects();
      },
      function(response) {
        console.log('error');
      }
    );
  }
  $scope.fetchLight();

});
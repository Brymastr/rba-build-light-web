app.controller('HomeController', function($scope, $location) {
  $scope.home = "Home controller";

  $scope.goto = function(path) {
    $location.path(path).replace();
  }
});
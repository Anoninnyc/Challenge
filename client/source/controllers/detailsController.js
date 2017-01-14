myApp.controller('details', function($scope, infoService, toggleService) {
  
  $scope.getGoals = () => infoService.getGoals();

  $scope.getInfo = () => infoService.getInfo();

  $scope.back = () => toggleService.back();

});

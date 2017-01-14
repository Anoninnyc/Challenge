
myApp.controller('details', function($scope, infoService,toggleService) {
  
  $scope.getGoals = () => {
    return infoService.getGoals();
  };

  $scope.getInfo = () => {
    return infoService.getInfo();
  };

  $scope.back = () => {
    toggleService.back();
    console.log(infoService.filtered);
  };

});

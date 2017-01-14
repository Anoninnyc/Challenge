myApp.controller('dashboard', function($scope, infoService, toggleService){

  $scope.programs = infoService.programs;

  $scope.filter = index => toggleService.filter(index);

  $scope.getFiltered = () => infoService.getFiltered();

});

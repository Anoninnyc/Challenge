myApp.controller('details', function($scope, appService) {
 
  console.log("detail controller");
  
  $scope.testDetails = 5555;
  $scope.getFilter= () =>{
      console.log('running getFilter from details', appService.filtered);
      return appService.filtered;
  };

});
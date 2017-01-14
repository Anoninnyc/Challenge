

myApp.controller('dashboard', function($scope, appService) {
  $scope.filtered = false;
  $scope.test = 'running dashboard controller';
  $scope.programs  = appService.programs;
  console.log("dashboard controller", appService.programs);

  $scope.filter = index => {
    $scope.filtered = true;
    console.log(index);
    appService.specificApp = index;
    appService.filtered = true;

    console.log(appService.filtered);
  };

  $scope.getFilter=()=>{
      console.log('running getFilter from details', appService.filtered);
      return [appService.filtered,appService.specificApp];
  }

});


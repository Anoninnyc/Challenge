myApp.controller('dashboard', function($scope, appService) {

  $scope.filtered = false;
  $scope.test = 'running dashboard controller';
  $scope.programs  = appService.programs;
  console.log("dashboard controller", appService.programs);
  $scope.ids = appService.programs.map(program=>program.display_type);
  console.log('here are ids!',$scope.ids);


  $scope.filter = index => {
    $scope.filtered = true;
    console.log(index);
    appService.specificApp = $scope.ids.indexOf(index);
    appService.filtered = true;
    console.log(appService.filtered);
  };


  $scope.getFilter=()=>{
      console.log('running getFilter from details', appService.filtered);
      return [appService.filtered,appService.specificApp];
  }

});


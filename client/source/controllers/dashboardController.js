const programs = require('../programs.js').programs;


myApp.controller('dashboard', function($scope, appService) {
  $scope.filtered = false;
  $scope.test = 'running dashboard controller';
  $scope.programs  = programs.program_blueprints;
  console.log("dashboard controller", programs.program_blueprints);
  $scope.filter = index => {
    $scope.filtered = true;
    console.log(index);
    appService.filtered = true;
    console.log(appService.filtered);
  };

  $scope.getFilter=()=>{
      console.log('running getFilter from details', appService.filtered);
      return appService.filtered;
  }

});


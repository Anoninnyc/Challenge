const programs = require('../programs.js').programs.program_blueprints;
const goals = require('../goals.json').programs.program_blueprints;

myApp.controller('details', function($scope, appService) {
 
  console.log("detail controller");
  
  $scope.testDetails = 5555;
  $scope.getFilter= () => {
      console.log('running getFilter from details', appService.filtered);
      return [appService.filtered, programs[appService.specificApp]];

  };

  $scope.filter = index => {
    appService.filtered = false;
    console.log(appService.filtered);
  };


  

});
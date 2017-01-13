const programs = require('../programs.js').programs;


myApp.controller('dashboard', function($scope) {
 
  $scope.test = 'running dashboard ctonroller';
  $scope.programs  = programs;
  console.log("dashboard controller", programs);
});

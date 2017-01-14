const programs = require('../programs.js').programs.program_blueprints;
const goals = require('../goals.json').goals;

console.log("goals", goals);

myApp.controller('details', function($scope, appService) {
  $scope.goalGUIDS = goals.map(goal => goal.guid);
  $scope.testDetails = 5555;

  $scope.getGoals = () => {
    var allGoals = [];
    var total = 0;

    for (var i = 0; i < programs[appService.specificApp].goals.length; i++) {
      let index = $scope.goalGUIDS.indexOf(programs[appService.specificApp].goals[i].guid);
      if (index > -1) {
        allGoals.push(goals[index]);
      }
    }
    if (!!allGoals.length){
    total = allGoals.map(a=>a.incentive_value).reduce((a,b)=> a+b);
   }

    console.log('allGoals', allGoals, $scope.goalGUIDS, programs[appService.specificApp].goals.map(a => a.guid));
    return [allGoals, total];
  }



  $scope.getFilter = () => {
    console.log('running getFilter from details', programs[appService.specificApp], $scope.allGoals);
    return [appService.filtered, programs[appService.specificApp]];
  };

  $scope.filter = index => {
    appService.filtered = false;
    console.log(appService.filtered);
  };

});

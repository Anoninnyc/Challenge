const programs = require('../programs.js');
const goals = require('../goals.json');

myApp.service('infoService', function() {
  this.ids = programs.program_blueprints.map(program => program.display_type);
  this.filtered = false;
  this.specificApp = null;
  this.programs = programs.program_blueprints;
  this.goals = goals.goals;
  this.goalGUIDS = this.goals.map(goal => goal.guid);

  this.getFiltered = () => {
    return this.filtered;
  };

  this.getInfo = () => {
    return [this.filtered, this.programs[this.specificApp]];
  };

  this.getGoals = () => {
    const goals = this.goals;
    const matching = [];
    const programGoals = this.programs[this.specificApp].goals;
    let total = 0;

    programGoals.forEach(goal => {
      let index = this.goalGUIDS.indexOf(goal.guid);
      if (index > -1) {
        matching.push(goals[index]);
      }
    });

    total = matching.map(goal => goal.incentive_value).reduce((a, b) => a + b, 0);
    return [matching, total];
  };

});
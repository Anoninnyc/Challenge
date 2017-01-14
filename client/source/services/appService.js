const programs = require('../programs.js').programs;

myApp.service('appService', function() {
  this.filtered=false;
  this.specificApp=null;
  console.log(555);
  this.programs = programs.program_blueprints;
});


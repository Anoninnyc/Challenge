myApp = angular.module('myApp', ['ngRoute']);

require('./config.js');
require('./source/services/appService.js');
require('./source/controllers/dashboardController.js');
require('./source/controllers/detailsController.js');
require('./source/directives/directives.js');

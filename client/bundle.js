/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	myApp = angular.module('myApp', ['ngRoute']);

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const programs = __webpack_require__(2);
	const goals = __webpack_require__(3);

	myApp.service('infoService', function() {

	  this.ids = programs.program_blueprints.map(program => program.display_type);
	  this.filtered = false;
	  this.specificApp = null;
	  this.programs = programs.program_blueprints;
	  this.goals = goals.goals;
	  this.goalGUIDS = this.goals.map(goal => goal.guid);
	  // are we zoomed in?
	  this.getFiltered = () => this.filtered;
	  // get prgram info
	  this.getInfo = () => [this.filtered, this.programs[this.specificApp]];
	  // get goals associated with programs;
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "program_blueprints": [
	    {
	      "guid": "cb02cf94119c0a2500c0b4bc420180a0",
	      "bonus": null,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "77c0ff85ec73c4f85d7bb5f261f31587"
	      },
	      "color": "#50B3D7",
	      "custom": null,
	      "description": "The Ovia Pregnancy Tracker app helps you learn about your pregnancy health and baby's development every day, with customized content for you.",
	      "display_order": 1,
	      "display_type": "ovia_pregnancy",
	      "eligible_group": {
	        "guid": "e526baf6e98961b6de1b64919e704b8f"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "d485faa8da99b0c996e6f7a9740a4935"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": false,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/activision_blizzard_incentives/app_icons/icn_app_pregnancy@2x.png",
	      "incentive_description": "Earn up to $250 on an Amazon Gift Card. Starting 8/3/2015, earn $1 for each day you track an activity in the Ovia app. View and redeem your earnings in the Jiff app after 10/1/2015.",
	      "invisible": false,
	      "mandatory": false,
	      "possible_earnings_description": "Earn up to $250",
	      "pre_enrollment_grace_period": 90,
	      "start_date": "2015-07-01",
	      "subtext_template": "Earn up to $250",
	      "title": "Pregnancy Tracking",
	      "type": "program_status",
	      "goals": []
	    },
	    {
	      "guid": "cc7505e9ac70ec9e9e06639805df8195",
	      "bonus": null,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "5110121d17f3f40f7eca2e836f8f30ac"
	      },
	      "color": "#50B3D7",
	      "custom": null,
	      "description": "Ovia Fertility tracks your cycle and predicts your exact ovulation using the data you log and cutting-edge fertility research. Track your ovulation, period, intercourse, symptoms, moods, cervical fluid, exercise, and more.",
	      "display_order": 2,
	      "display_type": "ovia_fertility",
	      "eligible_group": {
	        "guid": "e526baf6e98961b6de1b64919e704b8f"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "9124f928ccd038321ea90d279724cb98"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": false,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/activision_blizzard_incentives/app_icons/icn_app_fertility@2x.png",
	      "incentive_description": null,
	      "invisible": false,
	      "mandatory": false,
	      "possible_earnings_description": "",
	      "start_date": "2015-07-01",
	      "subtext_template": " {% if program.meta.status == 'registered' %}\n              You are ready to go!\n            {% else %}\n              Get Started\n            {% endif %}\n          ",
	      "title": "Fertility Tracking",
	      "type": "program_status",
	      "goals": []
	    },
	    {
	      "guid": "165f45e160b0e2ba4946300f16c51ff7",
	      "bonus": null,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "423c3327ec4d686fc802db5c3445e5df"
	      },
	      "color": "#663399",
	      "custom": null,
	      "description": "Go out and walk!",
	      "display_order": 6,
	      "display_type": "steps",
	      "eligible_group": {
	        "guid": "f69ba939dc542042b9ccac333c2c5f4e"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "b7cf78ec65846dbd82402e3598e90ae4"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": false,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/jiff/test_incentives/icn_program_steps%402x.png",
	      "incentive_description": "Earn every day! For every day you track your steps, you can earn up to $3:\n \n 5,000 steps: earn 1 point\n10,000 steps: earn 2 points\n15,000 steps: earn 3 points\n\nFor the steps you take to count toward your incentive goal, you must sync your tracker with its app within 14 days. For example, the steps you take on March 1 must be synced no later than March 15.",
	      "invisible": false,
	      "mandatory": null,
	      "possible_earnings_description": "Earn some points per day",
	      "pre_enrollment_grace_period": 0,
	      "start_date": "2015-07-01",
	      "subtext_template": null,
	      "title": "Walk 2014",
	      "type": "steps",
	      "goals": [
	        {
	          "guid": "49db5fada530b1a139d92166b7d7ff53"
	        },
	        {
	          "guid": "67cf5f3c9ccaa893651c275ab8e2be20"
	        },
	        {
	          "guid": "1486582125ae7226daac7b699c59d5fa"
	        }
	      ]
	    },
	    {
	      "guid": "5d9fea64809e7583921352f7add1c48d",
	      "bonus": null,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "6002314a5d99ebe5a265fe046efc4503"
	      },
	      "color": "#336699",
	      "custom": null,
	      "description": "Go home and sleep!",
	      "display_order": 5,
	      "display_type": "sleep",
	      "eligible_group": {
	        "guid": "f69ba939dc542042b9ccac333c2c5f4e"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "d8cd8238325ecf3cd5c3a701619dd543"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": false,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/jiff/test_incentives/icn_program_birth%402x.png",
	      "incentive_description": "Earn points by completing goals!",
	      "invisible": false,
	      "mandatory": null,
	      "possible_earnings_description": "Earn some points per night",
	      "pre_enrollment_grace_period": 0,
	      "start_date": "2015-07-01",
	      "subtext_template": null,
	      "title": "Sleep 2014",
	      "type": "sleep",
	      "goals": [
	        {
	          "guid": "fe8b02b764de150ece76822c2be4535a"
	        }
	      ]
	    },
	    {
	      "guid": "e654bc9a3ed20641a4a120cc2e58e928",
	      "bonus": null,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "8b8f9bcd0dd715de802b41c196423529"
	      },
	      "color": "#993366",
	      "custom": null,
	      "description": "Go and eat something!",
	      "display_order": 3,
	      "display_type": "eat",
	      "eligible_group": {
	        "guid": "f69ba939dc542042b9ccac333c2c5f4e"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "7d363367ceadee5c112a8cb058c18f41"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": false,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/jiff/test_incentives/icn_program_food_tracking%402x.png",
	      "incentive_description": "Earn points by completing goals!",
	      "invisible": false,
	      "mandatory": null,
	      "possible_earnings_description": "Earn some points per day",
	      "pre_enrollment_grace_period": 0,
	      "start_date": "2015-07-01",
	      "subtext_template": null,
	      "title": "Eat 2014",
	      "type": "food",
	      "goals": [
	        {
	          "guid": "f1695cfbc8a912753022be9ea1a1c4d7"
	        }
	      ]
	    },
	    {
	      "guid": "e5c684407e9476a6f786db82ef0d04c5",
	      "bonus": true,
	      "brand_icon": null,
	      "catalog_guid": "dd6f413e824bfe18584f30666cd8fcd5",
	      "catalog": {
	        "guid": "dd6f413e824bfe18584f30666cd8fcd5"
	      },
	      "channel": {
	        "guid": "0d9da76159fccb3343eac348a32375a3"
	      },
	      "color": "#ffffff",
	      "custom": null,
	      "description": "Go and bonus something!",
	      "display_order": 6,
	      "display_type": "Register",
	      "eligible_group": {
	        "guid": "f69ba939dc542042b9ccac333c2c5f4e"
	      },
	      "end_date": "2015-12-31",
	      "enrolled_group": {
	        "guid": "c1843bc5582b7e8034a601062354daf4"
	      },
	      "enrollment_end_date": "2015-12-31",
	      "enrollment_start_date": "2015-07-01",
	      "hide_during_enrollment": true,
	      "icon_url": "https://s3.amazonaws.com/i.jiff.com/production/applications/myjiff/jiff/test_incentives/icn_program_bonus%402x.png",
	      "incentive_description": "$25 for program enrollment and $25 for linking device",
	      "invisible": true,
	      "mandatory": true,
	      "possible_earnings_description": "Earn some points per day",
	      "pre_enrollment_grace_period": 0,
	      "start_date": "2015-07-01",
	      "subtext_template": null,
	      "title": "Registration and Linked Tracker Bonus",
	      "type": "bonus",
	      "goals": []
	    }
	  ]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	 module.exports ={
	  "goals": [
	    {
	      "guid": "49db5fada530b1a139d92166b7d7ff53",
	      "title": "Hit 5000 steps a day",
	      "description": "Walk 5000 steps a day",
	      "type": "steps",
	      "data_type": "activity",
	      "display_type": "steps",
	      "start_date": "2015-07-01",
	      "end_date": "2015-12-31",
	      "first_earnable_ignores_enroll_date": null,
	      "tracking_frequency": "day",
	      "progress_frequency": "day",
	      "required_tracker": true,
	      "target_value": 5000,
	      "grace_period": 14,
	      "target_comparison_method": null,
	      "baseline": null,
	      "calculation_type": "total",
	      "prorate_short_periods": null,
	      "scope_identifier": null,
	      "program_blueprint_id": "165f45e160b0e2ba4946300f16c51ff7",
	      "display_order": null,
	      "subtext_template": null,
	      "pre_success_details": null,
	      "post_success_details": null,
	      "incentive_value": 100
	    },
	    {
	      "guid": "67cf5f3c9ccaa893651c275ab8e2be20",
	      "title": "Hit 7500 steps a day",
	      "description": "Walk 7500 steps a day",
	      "type": "steps",
	      "data_type": "activity",
	      "display_type": "steps",
	      "start_date": "2015-07-01",
	      "end_date": "2015-12-31",
	      "first_earnable_ignores_enroll_date": null,
	      "tracking_frequency": "day",
	      "progress_frequency": "day",
	      "required_tracker": true,
	      "target_value": 7500,
	      "grace_period": 14,
	      "target_comparison_method": null,
	      "baseline": null,
	      "calculation_type": "total",
	      "prorate_short_periods": null,
	      "scope_identifier": null,
	      "program_blueprint_id": "165f45e160b0e2ba4946300f16c51ff7",
	      "display_order": null,
	      "subtext_template": null,
	      "pre_success_details": null,
	      "post_success_details": null,
	      "incentive_value": 100
	    },
	    {
	      "guid": "1486582125ae7226daac7b699c59d5fa",
	      "title": "Hit 10000 steps a day",
	      "description": "Walk 10000 steps a day",
	      "type": "steps",
	      "data_type": "activity",
	      "display_type": "steps",
	      "start_date": "2015-07-01",
	      "end_date": "2015-12-31",
	      "first_earnable_ignores_enroll_date": null,
	      "tracking_frequency": "day",
	      "progress_frequency": "day",
	      "required_tracker": true,
	      "target_value": 10000,
	      "grace_period": 14,
	      "target_comparison_method": null,
	      "baseline": null,
	      "calculation_type": "total",
	      "prorate_short_periods": null,
	      "scope_identifier": null,
	      "program_blueprint_id": "165f45e160b0e2ba4946300f16c51ff7",
	      "display_order": null,
	      "subtext_template": null,
	      "pre_success_details": null,
	      "post_success_details": null,
	      "incentive_value": 100
	    },
	    {
	      "guid": "fe8b02b764de150ece76822c2be4535a",
	      "title": "Sleep",
	      "description": "Sleep",
	      "type": "sleep_tracked",
	      "data_type": "sleep",
	      "display_type": "steps",
	      "start_date": "2015-07-01",
	      "end_date": "2015-12-31",
	      "first_earnable_ignores_enroll_date": null,
	      "tracking_frequency": "day",
	      "progress_frequency": "day",
	      "required_tracker": true,
	      "target_value": 1,
	      "grace_period": 3,
	      "target_comparison_method": null,
	      "baseline": null,
	      "calculation_type": "total",
	      "prorate_short_periods": null,
	      "scope_identifier": null,
	      "program_blueprint_id": "5d9fea64809e7583921352f7add1c48d",
	      "display_order": null,
	      "subtext_template": null,
	      "pre_success_details": null,
	      "post_success_details": null,
	      "incentive_value": 200
	    },
	    {
	      "guid": "f1695cfbc8a912753022be9ea1a1c4d7",
	      "title": "Eat",
	      "description": "Eat",
	      "type": "food_tracked",
	      "data_type": "food",
	      "display_type": "steps",
	      "start_date": "2015-07-01",
	      "end_date": "2015-12-31",
	      "first_earnable_ignores_enroll_date": null,
	      "tracking_frequency": "day",
	      "progress_frequency": "day",
	      "required_tracker": true,
	      "target_value": 1,
	      "grace_period": 3,
	      "target_comparison_method": null,
	      "baseline": null,
	      "calculation_type": "total",
	      "prorate_short_periods": null,
	      "scope_identifier": null,
	      "program_blueprint_id": "e654bc9a3ed20641a4a120cc2e58e928",
	      "display_order": null,
	      "subtext_template": null,
	      "pre_success_details": null,
	      "post_success_details": null,
	      "incentive_value": 100
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	myApp.service('toggleService', function(infoService) {
	  //zoom in/toggle view
	  this.filter = index => {
	    infoService.specificApp = infoService.ids.indexOf(index);
	    infoService.filtered = true;
	  };
	  //zoomout/toggle view
	  this.back = () => infoService.filtered = false;
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	myApp.controller('dashboard', function($scope, infoService, toggleService) {

	  $scope.programs = infoService.programs;
	  // zoom in
	  $scope.filter = index => toggleService.filter(index);
	  // Are we zoomed in?
	  $scope.getFiltered = () => infoService.getFiltered();
	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	myApp.controller('details', function($scope, infoService, toggleService) {
	  // self-explanatory
	  $scope.getGoals = () => infoService.getGoals();
	  // get program info
	  $scope.getInfo = () => infoService.getInfo();
	  // zoom out
	  $scope.back = () => toggleService.back();
	});


/***/ },
/* 7 */
/***/ function(module, exports) {

	myApp.directive('dashboardView', function() {
	  return {
	    restrict: "A",
	    templateUrl: '../source/views/dashboardView.html'
	  };
	});

	myApp.directive('detailsView', function() {
	  return {
	    restrict: "A",
	    templateUrl: '../source/views/detailsView.html'
	  };
	});


/***/ }
/******/ ]);
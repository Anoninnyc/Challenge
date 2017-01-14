.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController as home'
  });
  $routeProvider.when('/profile/:id', {
    templateUrl: 'profile.html',
    controller: 'ProfileController as profile'
  });
}])
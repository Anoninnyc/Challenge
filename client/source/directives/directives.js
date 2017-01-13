myApp.directive('programsView', function() {
  return {
  	  restrict:"A", 
      templateUrl: '../source/views/programsView.html'  
      };
});

myApp.directive('detailsView', function() {
  return {
  	  restrict:"A",
      templateUrl: '../source/views/detailsView.html'  
      };
});
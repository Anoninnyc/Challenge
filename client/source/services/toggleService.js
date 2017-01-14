myApp.service('toggleService', function(infoService) {
  
  this.filter = index => {
    infoService.specificApp = infoService.ids.indexOf(index);
    infoService.filtered = true;
  };

  this.back = () =>infoService.filtered=false;

})
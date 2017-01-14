myApp.service('toggleService', function(infoService) {
  
  this.filter = index => {
    infoService.specificApp = infoService.ids.indexOf(index);
    infoService.filtered = true;
    console.log(infoService.filtered);
  };

  this.back = ()=>{
    infoService.filtered=false;
  };
})
var express=require('express');

module.exports=function(app){
    var router=express.Router();
    var notificationHandler=require('../../jobs/notificationjob.js');  
    router.post('/sendnotification',notificationHandler.sendnotification);     
    app.use('/',router);
}
  

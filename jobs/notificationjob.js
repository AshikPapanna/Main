


var schedule = require('node-schedule');
var notificationmailhelper=require('../server/helpers/notificationsendgrid.js');
var User=require('../schemas/user.js'); 
 
exports.sendnotification=function(req,res,next){
schedule.scheduleJob('*/1 * * * *', function(){
  User.find({role:'Admin'},function(err,users){
    if(err){
      console.log(err);
    }
    if(users){
      users.forEach(function(element) {
       notificationmailhelper.sendnotificationmail(element.email,element.firstname);
      }, this);

    }
  });
 
});
return res;
}
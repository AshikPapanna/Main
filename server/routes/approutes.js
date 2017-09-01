var express=require('express');

module.exports=function(app){
    var router=express.Router();
    var userHandler=require('../repository/userrepo.js');
    router.post('/auth/register',userHandler.register);
    router.post('/auth/signin',userHandler.signin);      
    app.use('/',router);
}
  

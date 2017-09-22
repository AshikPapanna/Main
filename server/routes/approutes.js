var express=require('express');

module.exports=function(app){
    var router=express.Router();
    var userHandler=require('../repository/userrepo.js');
    router.post('/auth/register',userHandler.register);
    router.post('/login',userHandler.signin);
    router.post('/auth/users',userHandler.userslist);
    router.get('/',function(req,res){
        res.sendFile(__base+'index.html');
        
    });
          
    app.use('/',router);
}
  

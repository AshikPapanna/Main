var express=require('express');

module.exports=function(app){
    var router=express.Router();
    var userHandler=require('../repository/userrepo.js');
    router.get('/profiles', function(req, res) {
     if(req.user){
  res.sendfile(__base+'index.html');
     }else{
         console.log('cannotget');
         res.send('cannotget');
     }
})
    router.get('*', function(req, res) {
  res.sendfile(__base+'index.html');
});
 
    router.post('/forgotpassword',userHandler.forgotpassword);
    router.post('/register',userHandler.register);
    router.post('/login',userHandler.signin);
    router.post('/auth/users',userHandler.userslist);
    router.get('/',function(req,res){
        res.sendFile(__base+'index.html');
        
    });          
    app.use('/',router);
}
  

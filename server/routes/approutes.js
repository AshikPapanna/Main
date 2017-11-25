var express=require('express');

module.exports=function(app){
    var router=express.Router();
    var userHandler=require('../repository/userrepo.js');
    var profileHandler=require('../repository/profilerepo');
     var faqshandler=require('../repository/faqsrepo');
     var homehandler=require('../repository/homerepo.js');

    router.get('/profiles', profileHandler.getprofiles ); 
    router.get('/profilesforhome',profileHandler.getprofilesforhome);
    router.post('/forgotpassword',userHandler.forgotpassword);
    router.post('/register',userHandler.register);
    router.post('/login',userHandler.signin);
    router.get('/faqs',faqshandler.getfaqs);
    router.get('/home',homehandler.gethome);
    router.post('/auth/users',userHandler.userslist);
    router.get('/',function(req,res){  
        console.log('base');      
        res.sendFile(__base+'index.html');
        
    }); 
    router.get('*', function(req, res) {
        console.log('hi');
        res.sendFile(__base+'index.html');
      });         
    app.use('/',router);
}
  

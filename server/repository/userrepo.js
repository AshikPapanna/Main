
var jwt=require('jsonwebtoken');
var User=require('../../schemas/user.js');
var mongo=require('./mongo.js').connect();
var appconfig=require('../../appconfig.js');
var mailhelper=require('../helpers/confirmationsendgrid.js');
var bcrypt = require("bcrypt-nodejs");



exports.register=function(req,res,next)
{  
     var newUser=new User(req.body); 
     newUser.hash_password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));    
     newUser.save(function(err,user){
        if(err){
            return res.status(401).json({ message:{
              'lastname': err.errors && err.errors.lastname && err.errors.lastname.message,
              'firstname':err.errors && err.errors.firstname && err.errors.firstname.message,
              'email':err.errors && err.errors.email && err.errors.email.message}});
          }
        else{
            user.hash_password=undefined; 
            var error= mailhelper.sendconfirmationmail(user.email,jwt.sign({
                                         email:user.email,
                                         fullname:user.fullname,
                                         _id:user._id
                                         }
                                        ,appconfig.secrete
                                        ,{ expiresIn:250
                                          }));
           
                                        
                return res.json(user);
            }
    });
}

exports.signin=function(req,res){     
    User.findOne({email:req.body.emailId,isemailverified:true},function(err,user){
                 console.log(req.body);
if(err){ console.log(err);}
if(!user){
    console.log(user);
    return res.status(401).json({message:"Authentication failed. Invalid user or password"});
}else if(user)
{
  if  (!user.comparepassword(req.body.password))
    {
        return res.status(401).json({message:"Authentication failed. Invalid user or password"});
     }
}
return res.json({token:jwt.sign({
    email:user.email,
    fullname:user.fullname,
    _id:user._id
       },appconfig.secrete,{
           expiresIn:250
       }
)});
})
}
/*
exports.loginrequired=function(req,res,next){
if(req.user){next();}
else{
    return res.status(401).json({message:'Unauthorized user!'})
}
}*/
exports.userslist=function(req,res,next)
{
    if(req.user)
        {
    User.find({}, function(err, users) {
     return   res.json(users);
      });
    }else{
        return res.status(401).json({message:'Unauthorized user!'});
    }
}
exports.forgotpassword=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(user)
            {

            }
            else{
                
            }
    })
}




//var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt-nodejs');
var User=require('../../schemas/user.js');
var mongo=require('./mongo.js');
var appconfig=require('../../appconfig.js');
var mailhelper=require('../helpers/confirmationsendgrid.js');


exports.register=function(req,res,next)
{  
    mongo.connect();
    console.log(req.body);
    console.log(User);
    var newUser=new User.User(req.body); 
    newUser.hash_password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));    
    console.log(newUser.hash_password);
    newUser.save(function(err,user){
        console.log(err);
        if(err){
            return res.json({
              'lastname': err.errors && err.errors.lastname && err.errors.lastname.message,
              'firstname':err.errors && err.errors.firstname && err.errors.firstname.message,
              'email':err.errors && err.errors.email && err.errors.email.message});
            }
        else{
            user.hash_password=undefined; 
            mailhelper.sendconfirmationmail(user.email,jwt.sign({
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
    console.log(res+req.body.emailId);
    console.log(User);
    mongo.connect();
User.User.findOne({
    email:req.body.emailId
             },function(err,user){
if(err){ console.log(err);}
if(!user||!user.comparepassword(req.body.password)){
    console.log('error');
    return res.status(401).json({message:"Authentication failed. Invalid user or password"});
}
console.log(user);
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

exports.loginrequired=function(req,res,next){
if(req.user){next();}
else{
    return res.status(401).json({message:'Unauthorized user!'})
}
}
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


//var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt-nodejs');
var User=require('../schemas/user.js');
var mongo=require('./mongo.js');
var appconfig=require('../../appconfig.js');

exports.register=function(req,res,next)
{  
    mongo.connect();
    console.log(req.body);
    var newUser=new User(req.body);
    newUser.hash_password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));    
    console.log(newUser.hash_password);
    newUser.save(function(err,user){
        console.log(err);
        if(err){
           return res.status(400).send(
               {message:err}
           );
        }
        else{
                user.hash_password=undefined; 
                return res.json(user);
            }
    });
}
exports.signin=function(req,res){
    console.log(res+req.body.emailId);
User.findOne({
    email:req.body.email
             },function(err,user){
if(err){throw err;}
if(!user||!user.comparepassword(req.body.password)){
    return res.status(401).json({message:"Authentication failed. Invalid user or password"});
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


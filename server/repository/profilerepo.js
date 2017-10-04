//var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt-nodejs');
var User=require('../../schemas/user.js');
var mongo=require('./mongo.js');
var appconfig=require('../../appconfig.js');
var mailhelper=require('../helpers/confirmationsendgrid.js');




exports.getprofiles=function(req,res){
    //mongo.connect();
    console.log('sucess');
    
   if(req.user && req.user._id)
    {
        User.User.update({ _id:req.user._id }, { $set: { isemailverified: true }});
        res.json({email:req.user.email});
    }
    else{
       res.redirect('/login');
    }
}
   




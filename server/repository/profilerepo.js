//var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt-nodejs');
var User=require('../../schemas/user.js');
var mongo=require('./mongo.js');
var appconfig=require('../../appconfig.js');
var mailhelper=require('../helpers/confirmationsendgrid.js');




exports.getprofiles=function(req,res){  
  if(req.user && req.user._id)
    {
     User.findByIdAndUpdate(req.user._id ,  
            { $set: { isemailverified: true }}
            ,{new:true},function(err,user){
                if(err)
                    {
                        console.log(err);
                    }
                    else{
                        console.log(user);
                      
                    }
            });
        res.json({email:req.user.email});
    }
    else{
       res.redirect('/login');
    }
}
   




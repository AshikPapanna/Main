//var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var User=require('../../schemas/user.js');
var TrainerProfile=require('../../schemas/trainerprofile.js');
var mongo=require('./mongo.js');
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
exports.getprofilesforhome=function(req,res){
    console.log('strated');
   // ,
    TrainerProfile.find({},['firstname','lastname','skills','imageurl'],function(err,profiles     
    ){
        if(!err)
            {
                return   res.json(profiles); 
        
       
            }
            else{
                console.log(err);  
            }
    });
   
}
   




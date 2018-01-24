var Instructors=require('../../schemas/instructors.js');
var mongo=require('./mongo.js');
var ObjectId = require('mongoose').Types.ObjectId;

exports.getallinstructors=function(req,res){
    Instructors.find({},['firstname','lastname','imageurl','specialized'],function(err,instructors){
        if(err) return res.status(401).json({message:{'mongoerror':"Invalid Instructor Documents"}});
       return res.json(instructors);
    })
}

exports.getinstructordetailsbyidorspecialization=function(req,res){
    console.log(req.params.id);
   
    Instructors.find(       
            {_id:req.params.id}  
       ,function(err,instructordetails){
        if(err) return res.status(401).json({message:{'mongoerror':"Invalid Instructor Documents"}});
       return res.json(instructordetails);
    })
}
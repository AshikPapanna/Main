var Instructors=require('../../schemas/instructors.js');
var mongo=require('./mongo.js');
var ObjectId = require('mongoose').Types.ObjectId;

exports.getallinstructors=function(req,res){
   /* Instructors.find({},['firstname','lastname','imageurl','specialized'],function(err,instructors){
        if(err) return res.status(401).json({message:{'mongoerror':"Invalid Instructor Documents"}});
       return res.json(instructors);
    });*/
     Instructors.aggregate([
       { "$project" : 
        {
            "firstname":1,
            'lastname':1,
            'imageurl':1,
            'specialized':1,
            
        }
       },
    
       {
        "$unwind":"$specialized"
       },
    {
    "$group":{"_id":"$specialized" ,"instructorbriefs":{"$push":{"firstname":"$firstname","lastname":"$lastname","imageurl":"$imageurl","_id":"$_id"}}}
    

    },
{
"$sort":{"_id":-1}
}
   /* ,{"$bucket":{
           "groupBy": "$specialized",
             "boundaries": ["Carnatic Classical Vocal", "Hindustani Classical Vocal" ],
              "default": "Other",
              "output": {
                "count": { "$sum": 1 },
                "corse" : { "$push": { "title": "$bio", "price": "$imageurl" } }
              }
    }
    }*/

    
    
     ]
    ,function(err,instructors){
       if(err) return res.status(401).json({message:{'mongoerror':"Invalid Instructor Documents"}});
     
       console.log(instructors);
       return res.json(instructors);  
    });

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
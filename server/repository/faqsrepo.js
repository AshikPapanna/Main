//var mongoose=require('mongoose');

var Faqs=require('../../schemas/faqs.js');
var mongo=require('./mongo.js');

exports.getfaqs=function(req,res){  
   Faqs.find({},function(err,faqs     
    ){
        if(!err)
            {
                return   res.json(faqs); 
        
       
            }
            else{
                console.log(err);  
            }
    });
  
}

   





var mongoose = require("mongoose");

var Instructors = new mongoose.Schema({
    specialized: [ { type: String, required: true,trim: true}],
    firstname: {
        type: String,
        trim: true,
        required:true
       },
       lastname:{
        type: String,
        trim: true,
       },
       imageurl:{
        type: String,
        trim: true,
       },
       education:{
        type: String,
        trim: true,  
       },
       from:{
        type: String
       },
       bio:{
           type:String
       },
       concerts:[{
           name:{
           type:String
           },
           place:{
               type:String
           }
       }] 
   
});


 mongoose.model("Instructors",Instructors);
 module.exports=mongoose.model('Instructors');
//# sourceMappingURL=user.js.map
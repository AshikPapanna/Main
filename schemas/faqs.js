
var mongoose = require("mongoose");

var Faqs = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
       // validate: [validators.isLength({message:'FirstName should be >=4 and <=10'},4, 10)]
    },
    answer: {
        type: String,
        trim: true,
        required:true
       // validate: [validators.isLength({message:'FirstName should be >=2 and <=6'},4, 10)]
    }
   
   
});


 mongoose.model("Faqs",Faqs);
 module.exports=mongoose.model('Faqs');
//# sourceMappingURL=user.js.map
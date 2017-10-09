
var mongoose = require("mongoose");

var TrainerProfileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
       // validate: [validators.isLength({message:'FirstName should be >=4 and <=10'},4, 10)]
    },
    lastname: {
        type: String,
        trim: true,
        required:true
       // validate: [validators.isLength({message:'FirstName should be >=2 and <=6'},4, 10)]
    },
    skills: [String],
    imageurl: {
        type: String,
        required: true
    },
    createddate: {
        type: Date,
        default: Date.now
    },
   
});
TrainerProfileSchema.pre('save', function (next) {
    var currentdate = new Date();
    if (!this.createddate) {
        this.createddate = currentdate;
    }
    next();
});

 mongoose.model("TrainerProfile",TrainerProfileSchema);
 module.exports=mongoose.model('TrainerProfile');
//# sourceMappingURL=user.js.map
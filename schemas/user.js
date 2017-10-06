
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var validators = require("mongoose-validators");
var uniqueValidators=require("mongoose-unique-validator");
var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        validate: [validators.isLength({message:'FirstName should be >=4 and <=10'},4, 10)]
    },
    lastname: {
        type: String,
        trim: true,
        required:true,
        validate: [validators.isLength({message:'FirstName should be >=2 and <=6'},4, 10)]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique:true
    },
    hash_password: {
        type: String,
        required: true
    },
    createddate: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpiresOn: {
        type: Date
    },
    isemailverified:{
        type:Boolean,
        default:false
    }
});
UserSchema.pre('save', function (next) {
    var currentdate = new Date();
    if (!this.createddate) {
        this.createddate = currentdate;
    }
    next();
});


UserSchema.plugin(uniqueValidators,{message:'{PATH} should be unique.'});

UserSchema.methods.fullname = function () {
    return this.firstname + ' ' + this.lastname;
};
UserSchema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};
 mongoose.model("User",UserSchema);
 module.exports=mongoose.model('User');
//# sourceMappingURL=user.js.map
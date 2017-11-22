
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var validators = require("mongoose-validators");
var uniqueValidators=require("mongoose-unique-validator");

var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        validate: [validators.isLength({message:'FirstName should be >=4 and <=10'},4, 20)]
    },
    lastname: {
        type: String,
        trim: true,
        required:true,
        validate: [validators.isLength({message:'FirstName should be >=2 and <=6'},2, 20)]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique:true
    },
    hash_password: {
        type: String      
    },
    createddate: {
        type: Date,
        default: Date.now
    },
    dob:{
        type: Date,       
    },
    age:{
        type:Number,
        min:[6,"Age should be more than 6"],
        max:[30,"Age should be less than 30"],
        required:[function(){return !this.dob;},"Please enter Age or Date of Birth"]
    },
    country:{
        type:String,
        enum:['India','United States'],
        required:[true,'Please select the Country']
    },
    gender:{
        type:String,
        enum:{values:['M','F'],message:'Please select valid Gender'},
        required:[true,'Please select the Gender']
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
    },
    issubscribed:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        enum:['Trainer','Admin','Registered','User'],
        default:'Registered'
    }
 
});
UserSchema.pre('save', function (next) {
    var currentdate = new Date();
    if (!this.createddate) {
        this.createddate = currentdate;
    } 
    console.log("this.dob.getUTCFullYear()");
      console.log(this.dob.getUTCFullYear());
    //validate DOB
    if(this.dob.getUTCFullYear()>(currentdate.getUTCFullYear()-5) || this.dob.getUTCFullYear()<1985)
    {
      next(new Error("Please enter valid Date of Birth"));
    }
     else
    {
      next();
    }
});


UserSchema.plugin(uniqueValidators,{message:'Email should be unique.'});

UserSchema.methods.fullname = function () {
    return this.firstname + ' ' + this.lastname;
};
UserSchema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};
 mongoose.model("User",UserSchema);
 module.exports=mongoose.model('User');
//# sourceMappingURL=user.js.map
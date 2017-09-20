var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var schema=mongoose.Schema;
var userschema= new schema({
  fullname:{
      type:String,
      required:true,
      trim:true
  },
  email:{
      type:String,
      required:true,
      trim:true,
      lowercase:true,
      unique:true
  },
  hash_password:{
      type:String,
      required:true
  },
  createddate:{
      type:Date,
      default:Date.now
  },
  resetPasswordToken:{
      type:String      
  },
  resetPasswordExpiresOn:{
type:Date
  }
});
userschema.methods.comparepassword=function(password){
    return bcrypt.compareSync(password,this.hash_password);
}

module.exports=mongoose.model('User', userschema);
import{Document,Schema,Model,model }from 'mongoose'

import {compareSync} from 'bcrypt-nodejs'

import {validators} from 'mongoose-validators'

 var UserSchema:Schema =new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        validate:[validators.isLength(4,10)]
    },
    lastname:{
        type:String,       
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
       
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
} );
UserSchema.pre('save',
function(next){
let currentdate=new Date();
if(!this.createddate){
    this.createddate=currentdate;
}
next();
});
UserSchema.methods.fullname=function():string{
 return this.firstname+' '+this.lastname;
}

UserSchema.methods.comparepassword=function(password){
    return compareSync(password,this.hash_password);
}
export const User  =  model("User",UserSchema);
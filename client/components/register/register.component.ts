import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'

import {Register} from '../../../models/registration'

import{RegisterService} from './register.service'
declare var $: any
@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    providers:[RegisterService]
})
export class RegisterComponent {
    constructor(private registerService:RegisterService){} 
    firstNamevalidateclass:string='';
    confirmpasswordclass:string='';
    passwordclass:string='';
    hi:string='ghs';
    lastnameclass:string='';
    emailvalidateclass:string='';
    IsSuccess:boolean=false;
   register=new Register('','','','','','','','');
   displayerror(evn:any){
console.log('error');
   }
comparePassword(password:string,confirmpassword:string):boolean{
    if(password!==confirmpassword)
        {          
this.confirmpasswordclass='invalid';
return false;
        }
else{     
   this.confirmpasswordclass='valid';
   return true;
}
}
validatelastname(lastname:string):boolean{
    if( lastname.length<2||lastname.length>20)
                {
                 
                    this.lastnameclass='invalid';
                    return false;
                }
                else{
                   
                    this.lastnameclass='valid';
                    return true;
                }
}
 Validatepasswordlength(password:string):boolean
 {
      if( password.length<8||password.length>20)
                {
                 
                    this.passwordclass='invalid';
                    return false;
                }
                else{
                   
                    this.passwordclass='valid';
                    return true;
                }
 }
   onSubmit(){
if(!(this.validatefirstname(this.register.firstname)
&&  this.Validatepasswordlength(this.register.password)
&& this.comparePassword(this.register.password,this.register.confirmpassword)
&& this.validatelastname(this.register.lastname)&& this.validateemail(this.register.email)) )
{
    return false;    
}
         this.registerService.register(this.register).subscribe(
            user=>
            {
                console.log(user.email);
                if(user.email){
                    this.emailvalidateclass='invalid';
                 }
                 else{
                    this.IsSuccess=true;
                 }
            },
            err=>{
                console.log('eds');
                console.log(err);
               
            }   
         )
   };
        validatefirstname(firstname:string):boolean{
            if( firstname.length<4||firstname.length>20)
                {
                   this.firstNamevalidateclass='invalid';
                    return false;
                }
                else{
                   
                    this.firstNamevalidateclass='valid';
                    return true;
                }
        }
        validateemail(email:string):boolean{
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                this.emailvalidateclass='valid'
                return true;
            }
        else{
            this.emailvalidateclass='invalid'
            return false;
        }
        }
}
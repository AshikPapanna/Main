import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'

import {Register} from '../../../models/registration'

import{RegisterService} from './register.service'
import {Location} from '@angular/common';

import {Router} from '@angular/router'
declare var $: any
@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    providers:[RegisterService]
})
export class RegisterComponent {
    constructor(private registerService:RegisterService
    ,private router:Router,private location:Location){} 
    firstNamevalidateclass:string='';
    confirmpasswordclass:string='';
    passwordclass:string='';  
    lastnameclass:string='';
    emailvalidateclass:string='';
    IsSuccess:boolean=false;
   register=new Register('','','','','','','','');
 
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
      console.log('right');   
    return false; 
  
}
console.log('wrong');
         this.registerService.register(this.register).subscribe(
            user=>
            {
              this.IsSuccess=true;
              console.log(user);
              localStorage.setItem('username',JSON.stringify({username:user.firstname}));
              window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));

             },
            err=>{
             
             if(err._body&& JSON.parse(err._body).message&& JSON.parse(err._body).message.email ){
                this.emailvalidateclass='invalid';    
                this.IsSuccess=false;            
             }
                
               
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
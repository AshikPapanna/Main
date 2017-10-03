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
    lastnameclass:string='';
   register=new Register('','','','','','','','');
   displayerror(evn:any){
console.log('error');
   }
comparePassword(password:string,confirmpassword:string){
    if(password!==confirmpassword)
        {
             console.log(this.register.password);
this.confirmpasswordclass='invalid';
        }
else{
     console.log(this.register.password);
   this.confirmpasswordclass='valid';
}
}
validatelastname(lastname:string){
    if( lastname.length<2||lastname.length>20)
                {
                 
                    this.lastnameclass='invalid';
                }
                else{
                   
                    this.lastnameclass='valid';
                }
}
 Validatepasswordlength(password:string)
 {
      if( password.length<8||password.length>20)
                {
                 
                    this.passwordclass='invalid';
                }
                else{
                   
                    this.passwordclass='valid';
                }
 }
   onSubmit(){
         this.registerService.register(this.register).subscribe(
            user=>
            {
                console.log(user);
            },
            err=>{
                console.log(err);
            }   
         )
   };
        validatefirstname(firstname:string){
            if( firstname.length<4||firstname.length>20)
                {
                 
                    this.firstNamevalidateclass='invalid';
                }
                else{
                   
                    this.firstNamevalidateclass='valid';
                }
        }
}
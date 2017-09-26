import {Component} from '@angular/core'

import {Register} from '../../../models/registration'

import{RegisterService} from './register.service'

@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    providers:[RegisterService]
})
export class RegisterComponent{
    constructor(private registerService:RegisterService){}
   register=new Register('','','','','','','','');
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
}
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
   register=new Register('','','','','','','','');
   displayerror(evn:any){
console.log('error');
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
}
import { Component, OnInit, OnChanges, SimpleChanges,AfterViewInit } from '@angular/core'

import {Register} from '../../../models/registration'

import{RegisterService} from './register.service'
import {Location} from '@angular/common';

import {CountryList} from '../../constants/countries'

import {Router} from '@angular/router'
import 'materialize-css';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {FormBuilder,FormGroup,Validators,FormControl,AbstractControl,AsyncValidatorFn} from '@angular/forms'

@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    providers:[RegisterService]
})
export class RegisterComponent  {
    countrylist:any;
    agelist:Array<Number>[]=[]; 
         
    registerform: FormGroup;
    constructor(private registerService:RegisterService,private formbuilder:FormBuilder
    ,private router:Router,private location:Location){
        this.createform();
        var i;
        this.countrylist=CountryList;
        for(i=6;i<=40;i++){
             this.agelist.push(i);
        }
    } 
    createform(){
        this.registerform=this.formbuilder.group(
            {
                firstname :['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
                 lastname :['',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
                 email:['',[Validators.required,Validators.email],this.checkisemailunique.bind(this)],
                 username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
                 gender:'M',
                 age:['6',[Validators.max(60),Validators.min(6)]],
                 country:['India',[Validators.required]]         
               
            }
        )
    }
      checkisemailunique(control: AbstractControl) {                        
                return this.registerService.checkisemailunique({email:control.value})
                .map(
                    data => 
                    { if(data)
                        {
                       if(data.message==="failed")
                        {
                            return  {"emailtaken":true};
                        }
                        else{
                            return null;
                        }
                        }
                    }
                   ,err=>{                         
                         return {"eeeror":true}
                   })
                    
                
        };

    isvalidfield(field:string){  
      return  this.registerform.get(field).invalid &&  this.registerform.get(field).touched;
    }
   onSubmit(){ 
       
     this.registerService.register(this.registerform.value).subscribe(
         data=>{
            this.registerform.reset();
         },
         err=>{
              console.log(err);
         }
     )
}
}
import { Component, OnInit, OnChanges, SimpleChanges,AfterViewInit } from '@angular/core'

import {Register} from '../../../models/registration'

import{RegisterService} from './register.service'
import {Location} from '@angular/common';

import {CountryList} from '../../constants/countries'

import {Router} from '@angular/router'
import 'materialize-css';

import {FormBuilder,FormGroup,Validators,FormControl,AbstractControl} from '@angular/forms'
declare var $: any
@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
    providers:[RegisterService]
})
export class RegisterComponent implements AfterViewInit {
    countrylist:any;
    agelist:Array<Number>[]=[];
    ngAfterViewInit(): void {
         jQuery(document).ready(function() {
   // jQuery('select').material_select();
  });
    }
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
                 email:['',[Validators.required]],
                 username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
                 gender:'M',
                 age:['6',[Validators.max(60),Validators.min(3)]],
                 country:['India',[Validators.required]]         
               
            }
        )
    }
    isvalidfield(field:string){
    
      return  this.registerform.get(field).invalid &&  this.registerform.get(field).touched;
    }
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
    validateuniqueemail(email:AbstractControl){

    }

    firstNamevalidateclass:string='';
    confirmpasswordclass:string='';
    passwordclass:string='';  
    lastnameclass:string='';
    emailvalidateclass:string='';
    IsSuccess:boolean=false;
   register=new Register('','','','','','','','');


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
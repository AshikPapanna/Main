import {Component,OnInit} from '@angular/core'
import {LoginService} from './login.service'
import{Router} from '@angular/router'
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms'

@Component({
    moduleId:module.id,
    selector:'my-login',   
   templateUrl:'./login.component.html',
   styleUrls:['./login.component.css'],
   providers:[LoginService]
})
export class LoginComponent implements OnInit{
    loginForm:FormGroup;
    ngOnInit(): void {
         if(this.loginservice.islogedin()){
       window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
             }
    }
    constructor(private loginservice: LoginService,
    private route:Router,private fb:FormBuilder ){
        this.createform();
    };
    createform(){
        this.loginForm=this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
        })
    } 
     isvalidfield(field:string){  
      return  this.loginForm.get(field).invalid &&  this.loginForm.get(field).touched;
    } 
  
    onSubmit(){       
        this.loginservice.login(this.loginForm.value).subscribe(
            user=>
            {
                console.log(user);
                window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
            },
            err=>{
                console.log(err);
                if(err._body&& JSON.parse(err._body).message&& JSON.parse(err._body).message.email ){
                this.loginForm.controls['email'].setErrors({'invalid':true});  
                   
             }
            if(err._body&& JSON.parse(err._body).message&& JSON.parse(err._body).message.password ){
             
                  this.loginForm.controls['password'].setErrors({'invalid':true});  
                   
             }
            }
        )
    }
}

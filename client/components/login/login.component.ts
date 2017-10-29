import {Component} from '@angular/core'
import {Login} from '../../../models/login'
import {LoginService} from './login.service'
import{Router} from '@angular/router'

@Component({
    moduleId:module.id,
    selector:'my-login',   
   templateUrl:'./login.component.html',
   styleUrls:['./login.component.css'],
   providers:[LoginService]
})
export class LoginComponent{
    constructor(private loginservice:LoginService,
    private route:Router){};
    loginForm:any;
     emailvalidateclass:string='';
      passwordclass:string='';  
    login=new Login('','','');
   /* closeNav(){
        document.getElementById("mySidenav").style.width = "0%";        
    }
    registerclick(){
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenavforregister").style.width = "30%";
    }*/
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
        console.log(this.login);
        this.loginservice.login(this.login).subscribe(
            user=>
            {
                console.log(user);
                window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
            },
            err=>{
                console.log(err);
                if(err._body&& JSON.parse(err._body).message&& JSON.parse(err._body).message.email ){
                this.emailvalidateclass='invalid';  
                   
             }
            if(err._body&& JSON.parse(err._body).message&& JSON.parse(err._body).message.password ){
                this.passwordclass='invalid';  
                   
             }
            }
        )
    }
}

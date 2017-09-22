import {Component} from '@angular/core'
import {Login} from '../../../models/login'
import {LoginService} from './login.service'

@Component({
    moduleId:module.id,
    selector:'my-login',   
   templateUrl:'./login.component.html',
   styleUrls:['./login.component.css'],
   providers:[LoginService]
})
export class LoginComponent{
    constructor(private loginservice:LoginService){};
    loginForm:any;
    login=new Login('','','');
    closeNav(){
        document.getElementById("mySidenav").style.width = "0%";        
    }
    registerclick(){
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenavforregister").style.width = "30%";
    }
    onSubmit(){
        console.log(this.login);
        this.loginservice.login(this.login).subscribe(
            user=>
            {
                console.log(user);
            },
            err=>{
                console.log(err);
            }
        )
    }
}

import {Component} from '@angular/core'
import {Login} from '../../../models/login'

@Component({
    moduleId:module.id,
    selector:'my-login',   
   templateUrl:'./login.component.html',
   styleUrls:['./login.component.css']
})
export class LoginComponent{
    login=new Login('','','');
    closeNav(){
        document.getElementById("mySidenav").style.width = "0%";        
    }
    registerclick(){
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenavforregister").style.width = "30%";
    }
    onSubmit(){
        
    }
}

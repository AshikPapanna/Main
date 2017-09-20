import {Component} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:'my-login',   
   templateUrl:'./login.component.html',
   styleUrls:['./login.component.css']
})
export class LoginComponent{
    closeNav(){
        document.getElementById("mySidenav").style.width = "0%";        
    }
    registerclick(){
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenavforregister").style.width = "30%";
    }
}

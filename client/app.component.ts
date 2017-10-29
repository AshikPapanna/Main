import{Component,OnInit} from '@angular/core'
import {Profile} from './../models/profile'
import {routerTransition} from './app.routeanimation'
import{LoginService} from './components/login/login.service'
import {Location} from '@angular/common'

@Component({
  moduleId:module.id,
selector:'my-app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css'],
animations:[routerTransition],
providers:[LoginService]
})
export class AppComponent{

  constructor(private loginService:LoginService,private location:Location){
    
        }
    username:string;
    isFromRegister:boolean;
    getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit(){
    if(this.loginService.islogedin()){
    var user=JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.username=user.user && user.user.firstname;
    }
 }
  logout(){
    this.loginService.logout();
    window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
  }
  isloggedin()
  {
    console.log('islogin');
  return  this.loginService.islogedin();
  }
  
}
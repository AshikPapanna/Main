import{Component,OnInit} from '@angular/core'
import {Profile} from './../models/profile'
import {routerTransition} from './app.routeanimation'

@Component({
  moduleId:module.id,
selector:'my-app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css'],
animations:[routerTransition]
})
export class AppComponent{

  constructor(){
    
        }
    username:string;
    isFromRegister:boolean;
    getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit(){
    var user=JSON.parse(localStorage.getItem('username'));
    console.log(user);
    this.username=user && user.username;
 }
  
}
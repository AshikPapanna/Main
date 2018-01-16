import{Component,OnInit} from '@angular/core'
import {Profile} from './../models/profile'
import {routerTransition} from './app.routeanimation'

import{LoginService} from './components/login/login.service'
import {trigger, stagger,state
  , animate, style, group
  , query as q, transition
  , keyframes} from '@angular/animations';
import {Location} from '@angular/common'
const query = (s,a,o={optional:true})=>q(s,a,o);

/*export const homeTransition = trigger('footerTransition', [

  transition('*<=>*', [
    //padding:2%;background-color: #464546  ;position: relative;
   query('.sa-footer-con', style({opacity: 0 } )),
   query('.sa-sitmap-tab', style({opacity: 0 } )),
   query('.sa-footer-con', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
   query('.sa-sitmap-tab', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.sa-footer-con', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),        
  ])
]);*/

@Component({
  moduleId:module.id,
selector:'my-app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css'],
animations:[routerTransition],
providers:[LoginService]
/*host:{
  "[@footerTransition]":''
}*/
})
export class AppComponent{

  constructor(private loginService:LoginService,private location:Location){
    
        }
    username:string;
    
    isFromRegister:boolean;
    getState(outlet,v) {
      console.log(outlet.activatedRouteData.state);
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
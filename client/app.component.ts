import{Component} from '@angular/core'
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
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
}
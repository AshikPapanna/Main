import{Component} from '@angular/core'
import {Profile} from './../models/profile'
@Component({
  moduleId:module.id,
selector:'my-app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent{
  title="Hi Ashik";
  profiles:Profile[]= [
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    /*new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),*/
  ];
}
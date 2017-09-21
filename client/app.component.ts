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
  isblur=false;
  navclass={
    'navbar-fixed':true,
    'vb-blur':true

  }
  profiles:Profile[]= [
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    /*new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),
    new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/gravatar1.jpg'),*/
  ];
  OpenNav()   {
    document.getElementById("mySidenav").style.width = "30%";
    document.getElementById("body").style.filter = "blur(20%)";
    this.isblur=true;
}
}
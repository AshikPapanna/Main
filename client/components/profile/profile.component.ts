import {Component,Input} from '@angular/core'
import {Profile} from '../../../models/profile'

import {CommonModule} from '@angular/common'


@Component({
  
    moduleId:module.id,
    selector:'my-profile',
    templateUrl:'./profile.component.html'
})
export class ProfileComponent {
    
  @Input()  profile:Profile;
   // console.log(profile1);
  
 /*   ngOnInit: 
      {
          this.heroes= [
            new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/piano.png'),
            new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/piano.png'),
            new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/piano.png'),
            new Profile('asdasd', 'Windstorm','sdfsadsd','public/images/piano.png'),
          ];
      }*/
}


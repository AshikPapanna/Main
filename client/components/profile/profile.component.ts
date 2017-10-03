import {Component,Input,OnInit} from '@angular/core'
import {Profile} from '../../../models/profile'

import {CommonModule} from '@angular/common'
import{Observable} from 'rxjs/Rx'
import {ProfileService} from './profile.service';



@Component({  
    moduleId:module.id,
    selector:'my-profile',
    templateUrl:'./profile.component.html',
    providers:[ProfileService]
})
export class ProfileComponent {
   
  @Input()  profile:Profile;
  constructor(private profileservice:ProfileService){};
 profiles:Profile[];
 ngOnInit(){
      this.profileservice.getprofiles().subscribe(
          user=>{
              console.log('success');
             
          },
            err=>{
                console.log(err)
            }
            
      );
  }
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


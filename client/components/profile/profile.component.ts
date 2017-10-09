import {Component,Input,OnInit} from '@angular/core'
import {Profile} from '../../../models/profile'
import {ActivatedRoute,ParamMap} from '@angular/router'

import {CommonModule} from '@angular/common'
import{Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/switchMap'
import {ProfileService} from './profile.service';



@Component({  
    moduleId:module.id,
    selector:'my-profile',
    templateUrl:'./profile.component.html',
    providers:[ProfileService],
    inputs:['isfromhomeview']
})
export class ProfileComponent {
   
  @Input()  profile:Profile;
  @Input() isfromhomeview:boolean;
  constructor(private profileservice:ProfileService,
private route:ActivatedRoute){};
 profiles:Profile[];
 ngOnInit(){
 if(this.isfromhomeview)
    {
     this.profiles=this.profileservice.getprofilesforhome();
    }
this.route.params
.switchMap((params:ParamMap)=>this.profileservice.getprofiles(params['tokenId']))
.subscribe(user=>{
              console.log('success');
             
          },
            err=>{
                console.log(err)
            }
            
 ) ;
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


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
 filteredprofile:Profile[];
 higherindex:number=3;
 lowerindex:number=0;
 ngOnInit(){
 if(this.isfromhomeview)
    {
      this.profileservice.getprofilesforhome().subscribe(
          profile=>{
             this.profiles=profile;
             this.filteredprofile=this.profiles.slice(this.lowerindex,this.higherindex);            
             console.log( this.filteredprofile);
          },
          err=>{
               console.log(err);
          }
      );
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
  rotar(isadd:boolean){  
  if(isadd)
    {
      if(this.higherindex!=this.profiles.length)
        {
      this.lowerindex=this.lowerindex+1
      this.higherindex=this.higherindex+1
        }
    }else{
      if(this.lowerindex!=0)
        {
      this.lowerindex=this.lowerindex-1
      this.higherindex=this.higherindex-1
        }
    }
    this.filteredprofile=this.profiles.slice(this.lowerindex,this.higherindex);
  };
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


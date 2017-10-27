import {Component,OnInit} from '@angular/core'

import{ActivatedRoute,Params,ParamMap} from '@angular/router'

@Component({
    moduleId:module.id,
    selector:'my-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
  
})
export class HomeComponent{
    constructor(private route:ActivatedRoute){

    }
username:string;
isFromRegister:boolean;
ngOnInit(){
   /*console.log(this.route);
     this.route.params.subscribe((par:Params)=>{console.log(par); this.username= par['name']
    this.isFromRegister= par['ifr']})
    console.log(this.username);
    console.log(this.isFromRegister);*/
}
}
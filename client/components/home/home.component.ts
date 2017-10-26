import {Component,OnInit} from '@angular/core'

import{ActivatedRoute,Params} from '@angular/router'

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
     this.route.queryParams.subscribe((par:Params)=>{this.username= par['name']
    this.isFromRegister= par['ifr']})
    console.log(this.username);
    console.log(this.isFromRegister);
}
}
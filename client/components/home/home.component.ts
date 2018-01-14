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
stepheading:string;
stepdesc:string;
Registerimgsrc:string;
selectcourseimgsrc:string;
sarangworksteps:any;
clearimagesrc(){
    this.Registerimgsrc="../../../public/images/Register.svg";
    this.selectcourseimgsrc="../../../public/images/SelectCourse.svg";
}
;
changestep(event:any){
  var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
/*console.log(idAttr);
console.log(value);
jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
jQuery('.sa-step-link').removeClass();

this.clearimagesrc();
jQuery("#"+value+" b").addClass('sa-step-link');*/
jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
jQuery("#"+value).addClass('sa-imgcir-container-act');

  
    var index=this.sarangworksteps.sarangworksteps.findIndex(function(item,i){       
         return item.heading.replace(/\s+/g, '')==value.replace(/\s+/g, '');  
         
    })
    this.stepheading=this.sarangworksteps.sarangworksteps[index].heading;
    this.stepdesc=this.sarangworksteps.sarangworksteps[index].desc;
 

}
ngOnInit(){
    this.sarangworksteps={
    "sarangworksteps":[
        {
    "heading":"Register",
    "desc":"one can create one’s own perfect room to learn."    
     }
    ,{
    "heading":"Select Course",
    "desc":"unlike in universities it is not necessary that one has to personally and formally communicate with their tutors... communicate."
    
},
 {
    "heading":"Proficiency",
    "desc":"one can create one’s own perfect room to learn. Proficiency"    
     }
    ,
     {
    "heading":"Start Learn",
    "desc":"one can create one’s own perfect room to learn. startlearn"    
     }
    
]
};
    this.stepheading=this.sarangworksteps.sarangworksteps[0].heading;
    this.stepdesc=this.sarangworksteps.sarangworksteps[0].desc;
    this.Registerimgsrc=this.sarangworksteps.sarangworksteps[0].beforesrc;
   /*console.log(this.route);
     this.route.params.subscribe((par:Params)=>{console.log(par); this.username= par['name']
    this.isFromRegister= par['ifr']})
    console.log(this.username);
    console.log(this.isFromRegister);*/
}
}
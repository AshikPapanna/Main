import {Component,AfterViewInit,OnInit} from '@angular/core'
import {InstructorService} from './instructor.service'

import {Instructor,InstructorDetails} from '../../../models/instructor'

import {InstructordetailComponent} from './instructordetail/instructordetail.component'

@Component({
    moduleId:module.id,
    templateUrl:'./instructor.component.html',
    styleUrls:['./instructor.component.css'] ,
    providers:[InstructorService]
  
})

export class InstructorComponent implements AfterViewInit,OnInit{
  
    instructors:Instructor[];     
    distinctspecialization:string[]=[];
    data:InstructorDetails;
    specialization:string[]=[];
    showmodel:boolean=false;
    ngOnInit(): void {
       this.instructorService.getinstructors().subscribe(
         instructors=>{
           this.instructors=instructors ;          
           this.instructors.forEach(element => {   
                this.specialization.push(element.specialized);
               })
          this.distinctspecialization=  this.specialization.filter((v, i, a) => a.indexOf(v) === i);
            } , 
          err=>{console.log(err);}      
       )
       
     

    }

    constructor(private instructorService:InstructorService){

    }
   
    ngAfterViewInit(): void {
      /* jQuery(document).ready(function(){
       $('.modal').modal();
       })*/
    
    }
    closemodal(){
       
        this.showmodel=false;
    }
    getspecializtiondetails(specialization:String):Instructor[]{
        console.log(specialization)
       return this.instructors.filter(this.filterbasedonspcl,specialization);
      // return this.distinctspecialization;
    }
    filterbasedonspcl(value:Instructor,index){
     /*return value.find(function(ele){
                return ele===this.toString();
               },this);*/
    }
    getspecializationdetails(id:string){
       
        this.showmodel=true;
       
        this.instructorService.getinstructordetails(id).subscribe(
            details=>{
                this.data=details;
            },
            err=>{
                console.log(err);
            }
        )
    }

}
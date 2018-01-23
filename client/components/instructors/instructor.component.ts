import {Component,AfterViewInit,OnInit} from '@angular/core'
import {InstructorService} from './instructor.service'

import {Instructor,InstructorDetails} from '../../../models/instructor'

@Component({
    moduleId:module.id,
    templateUrl:'./instructor.component.html',
    styleUrls:['./instructor.component.css'] ,
    providers:[InstructorService]
  
})

export class InstructorComponent implements AfterViewInit,OnInit{
    instructors:Instructor[];     
    distinctspecialization:string[]=[];
    specialization:string[]=[];
    ngOnInit(): void {
       this.instructorService.getinstructors().subscribe(
         instructors=>{this.instructors=instructors ;          
            this.instructors.forEach(element => {   
            element.specialized.forEach(ele=>{
                   this.specialization.push(ele);
               })
            });
             this.distinctspecialization=  this.specialization.filter((v, i, a) => a.indexOf(v) === i);
            }  ,
          err=>{console.log(err);}      
       )     
     

    }

    constructor(private instructorService:InstructorService){

    }
   
    ngAfterViewInit(): void {
       jQuery(document).ready(function(){
       $('.modal').modal();
       })
    }
    closemodal(){
       
       $('#modal1').modal('close');
    }

}
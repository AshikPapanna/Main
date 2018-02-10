import {Component,AfterViewInit,OnInit} from '@angular/core'
import {InstructorService} from './instructor.service'

import {Instructor,InstructorDetails} from '../../../models/instructor'

import {InstructordetailComponent} from './instructordetail/instructordetail.component'

@Component({
    
    moduleId:module.id,
    templateUrl:'./instructor.component.html',
    styleUrls:['./instructor.component.css'] ,
    providers:[InstructorService],

  
})

export class InstructorComponent implements AfterViewInit,OnInit{
  
    instructors:Instructor[];    
    
    distinctspecializationdetials:Instructor[];     
    distinctspecialization:string[]=[];
    data:string;
    specialization:string[]=[];
    showmodel:boolean=false;
    ngOnInit(): void {
       this.instructorService.getinstructors().subscribe(
         instructors=>{
           this.instructors=instructors ;   
           console.log( this.instructors);       
           /*this.instructors.forEach(element => {   
                this.specialization.push(element.specialized);
               })
          this.distinctspecialization=  this.specialization.filter((v, i, a) => a.indexOf(v) === i);*/
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
       console.log("hi");
        this.showmodel=false;
    }
    setspecializtiondetails(specialization:String){
         console.log(specialization);
              this.distinctspecializationdetials=this.instructors.filter(this.filterbasedonspcl,specialization);
        console.log(this.distinctspecializationdetials)
     //  return 
      // return this.distinctspecialization;
    }
    filterbasedonspcl(value:Instructor,index){     
            //    return value.specialized===this.toString();
            
    }
    getspecializationdetails(id:string){
                this.data=id;
                this.showmodel=true; 
           
        
    }

}
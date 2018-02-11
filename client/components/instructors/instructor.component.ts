import {Component,AfterViewInit,OnInit} from '@angular/core'
import {InstructorService} from './instructor.service'

import {Instructor,InstructorDetails} from '../../../models/instructor'

import {InstructordetailComponent} from './instructordetail/instructordetail.component'
import {ActivatedRoute}from '@angular/router'

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
    id:string;
    specialization:string[]=[];
    showmodel:boolean=false;
    ngOnInit(): void {
        this.route.params.subscribe(par=>{
            this.id=par["id"];
        }

        )
    if( this.id)
        {
      this.instructorService.getinstructordetails(this.id).subscribe(
            details=>{
                this.data=details[0];
                console.log(this.data);
            },
            err=>{
                console.log(err);
            }
        )
        }
    
       this.instructorService.getinstructors().subscribe(
         instructors=>{
           this.instructors=instructors ;          
            } , 
          err=>{console.log(err);}      
       )
       
     

    }

    constructor(private instructorService:InstructorService,private route:ActivatedRoute){

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
import {Component,AfterViewInit} from '@angular/core'

@Component({
    moduleId:module.id,
    templateUrl:'./instructor.component.html',
    styleUrls:['./instructor.component.css'] 
  
})

export class InstructorComponent implements AfterViewInit{
 
    ngAfterViewInit(): void {
       jQuery(document).ready(function(){
       // $('.modal').modal();
       })
    }
    closemodal(){
       
     // ('#modal1').modal('close');
    }

}
import {Component,AfterViewInit,EventEmitter} from '@angular/core'

@Component({
    templateUrl:'./instructor.component.html'
    ,styleUrls:['./instructor.component.css'],
    moduleId:module.id
})

export class InstructorComponent implements AfterViewInit{
 
    ngAfterViewInit(): void {
       jQuery(document).ready(function(){
        $('.modal').modal();
       })
    }
    closemodal(){
       
      ('#modal1').modal('close');
    }

}
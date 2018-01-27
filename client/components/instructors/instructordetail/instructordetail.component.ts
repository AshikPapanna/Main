import {Component,Input,OnInit} from "@angular/core"
import {Instructor,InstructorDetails} from '../../../../models/instructor'
import {InstructorService} from './../instructor.service'

@Component({
    selector:'sa-instructormodal',
    moduleId:module.id,
    styleUrls:['./instructordetail.component.css'],
    templateUrl:'./instructordetail.component.html'
})
export class InstructordetailComponent implements OnInit{
    constructor(private instructorService:InstructorService ){

    }
    ngOnInit(): void {
       /*  getspecializationdetails(id:string){    
       
        this.instructorService.getinstructordetails(id).subscribe(
            details=>{
                this.data=details;
            },
            err=>{
                console.log(err);
            }
        )
    }*/

    }
    private _data: InstructorDetails;
    @Input()
    set data(data:InstructorDetails){
          this._data=data;
    }
    get instructordetails():InstructorDetails{
          return this.data;
    }
  
}
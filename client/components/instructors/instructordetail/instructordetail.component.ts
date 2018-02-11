import {Component,Input,Output,OnInit,EventEmitter} from "@angular/core"
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
    instructordetail:InstructorDetails;

    ngOnInit(): void {
       console.log(this.instructordetail);
      /*  this.instructorService.getinstructordetails(this.instructordetails).subscribe(
            details=>{
                this.instructordetail=details[0];
                console.log(this.instructordetail);
            },
            err=>{
                console.log(err);
            }
        )*/
    }

    closemodal(){
        this.close.emit(null);
    }
    private _data: string;
    @Input()
    set data(data:string){
          this._data=data;
    }
    get instructordetails():string{
          return this._data;
    }
 @Output()  close =new EventEmitter<any>();
  
}
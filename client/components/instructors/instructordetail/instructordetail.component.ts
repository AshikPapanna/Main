import {Component,Input} from "@angular/core"
import {Instructor,InstructorDetails} from '../../../../models/instructor'

@Component({
    selector:'sa-instructormodal',
    moduleId:module.id,
    styleUrls:['./instructordetail.component.css'],
    templateUrl:'./instructordetail.component.html'
})
export class InstructordetailComponent{
    private _data:InstructorDetails;
    @Input()
    set data(data:InstructorDetails){
          this._data=data;
    }
    get instructordetails():InstructorDetails{
          return this.data;
    }
  
}
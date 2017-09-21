import {Component} from '@angular/core'

import {Register} from '../../../models/registration'
@Component({
    moduleId:module.id,
    selector:'my-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})
export class RegisterComponent{
   register=new Register('','','','','','');
}
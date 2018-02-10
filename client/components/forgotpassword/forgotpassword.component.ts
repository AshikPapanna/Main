import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {ForgotpasswordService} from './forgotpassword.service';

import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms'


@Component({  
    moduleId:module.id,
    templateUrl:'./forgotpassword.component.html',
    styleUrls:['./forgotpassword.component.css'],
    providers:[ForgotpasswordService]
})
export class ForgotpasswordComponent {
   fpform:FormGroup;
    emailmodel: string;

constructor(private forgotpasswordService:ForgotpasswordService ,private fb:FormBuilder,private router:Router){
    this.createform();
}
createform(){
  this.fpform=this.fb.group(
      {
          email:['',[Validators.required,Validators.email]]
      }
  )
}
  isvalidfield(field:string){  
      return  this.fpform.get(field).invalid &&  this.fpform.get(field).touched;
    }
 


 onSubmit(){
            

         this.forgotpasswordService.forgotpassword(this.fpform.value).subscribe(
            user=>
            {
             this.router.navigate(['/registersuccessfull']);
             },
            err=>{
             console.log(err);
             if(err._body&& JSON.parse(err._body).email&& JSON.parse(err._body).email ){   
                  this.fpform.controls['email'].setErrors({'invalid':true});     
             }
                
               
            }   
         )
   };
       
}
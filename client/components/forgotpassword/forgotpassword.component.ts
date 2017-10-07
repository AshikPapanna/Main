import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {ForgotpasswordService} from './forgotpassword.service';
import {Register} from '../../../models/registration'

@Component({
    selector:'sa-forgotpassword',
    moduleId:module.id,
    templateUrl:'./forgotpassword.component.html',
    styleUrls:['./forgotpassword.component.css'],
    providers:[ForgotpasswordService]
})
export class ForgotpasswordComponent {
  
    emailmodel: string;

    register=new Register('','','','','','','','');
constructor(private forgotpasswordService:ForgotpasswordService ,private route:ActivatedRoute){}
  confirmpasswordclass:string='';
    passwordclass:string='';
       IsSuccess:boolean=false;
       emailvalidateclass:string='';
        a:string;
       
ngOnInit()
{
   
    this.route.queryParams.subscribe((par:Params)=>{this.register.email= par['emailid']})

}
  validateemail(email:string):boolean{
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                this.emailvalidateclass='valid'
                return true;
            }
        else{
            this.emailvalidateclass='invalid'
            return false;
        }}
comparePassword(password:string,confirmpassword:string):boolean{
    if(password!==confirmpassword)
        {          
this.confirmpasswordclass='invalid';
return false;
        }
else{     
   this.confirmpasswordclass='valid';
   return true;
}
}
Validatepasswordlength(password:string):boolean
 {
      if( password.length<8||password.length>20)
                {
                 
                    this.passwordclass='invalid';
                    return false;
                }
                else{
                   
                    this.passwordclass='valid';
                    return true;
                }
 }
             onSubmit(){
            
if(!(
 this.Validatepasswordlength(this.register.password)
&& this.comparePassword(this.register.password,this.register.confirmpassword)
) )
{
    return false;    
}
         this.forgotpasswordService.forgotpassword(this.register).subscribe(
            user=>
            {
              this.IsSuccess=true;
             },
            err=>{
             console.log(err);
             if(err._body&& JSON.parse(err._body).email&& JSON.parse(err._body).email ){   
                this.emailvalidateclass='invalid';            
                this.IsSuccess=false;            
             }
                
               
            }   
         )
   };
       
}
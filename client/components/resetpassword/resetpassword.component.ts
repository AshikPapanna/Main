import {Component, OnInit,NgZone,AfterViewInit} from '@angular/core'
import {ResetpasswordService} from './resetpassword.service'


import {FormBuilder,FormGroup,Validators,FormControl,AbstractControl,AsyncValidatorFn} from '@angular/forms'

import {ActivatedRoute,Router} from '@angular/router'


@Component({
    templateUrl: './resetpassword.component.html',
    providers: [ResetpasswordService],
    moduleId:module.id
})


export class ResetpasswordComponent implements OnInit {
    loginform:FormGroup;
    token:string;
    err:boolean;
    constructor(private resetpasswordService:ResetpasswordService,private fb:FormBuilder,private route: ActivatedRoute,
    private router:Router
,private ngzone:NgZone) {
        this.createform();
    }
    createform(){
        this.loginform=this.fb.group({
            password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
            confirmpassword:['',[Validators.required,this.checkpasswordmatches.bind(this)]]

        })
    }
    checkpasswordmatches(control:AbstractControl){
        if(this.loginform)
          return (control.value===  this.loginform.get('password').value)?null:{'donotmatch':true};
        else
            return null;
    }
     isvalidfield(field:string){  
      return  this.loginform.get(field).invalid &&  this.loginform.get(field).touched;
    }
    
    ngOnInit() {
        this.route.params.subscribe(params => {
       this.token = params['tokenId']; 
        })
       console.log(this.token);
       if( this.token)
        {
        this.resetpasswordService.getresetpassword(this.token).subscribe(
            user => { },
            err => {
                this.err=true;      
           }
        )
        }
        else{
       this.err=true;
    }

    if(this.err){ this.ngzone.run(()=>   this.router.navigateByUrl['/error'] )}
}
onSubmit(){
    this.resetpasswordService.postresetpassword(this.loginform.value,this.token).subscribe(
        user=>{
         window.location.replace(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));    
        }
    )
}
}
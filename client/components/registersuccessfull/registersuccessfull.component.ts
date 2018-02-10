import {Component}from '@angular/core'

@Component({
    selector:'sa-regsuccess',
    template:`
    <div class="row sa-center" >
       <div class="col 12">
         <p style="font-size:2em;color:white;">
           You've successfully registered to S&#x0101;RANG academy. An email has been sent your mail ID, please confirm your registration
         </p>
         <div>
    </div>
    `,
    styles:[
      `
      .sa-center{
            position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    width: 40%;
    text-align: center;
    background-color:darkgray;
  border-radius:3%;
     }      
      `
    ]
})
export class RegistersuccessfullComponent{

}
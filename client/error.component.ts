import {Component}from '@angular/core'

@Component({

    template:`
    <div class="row sa-center" >
       <div class="col 12">
         <p style="font-size:2em;color:white;">
          Oops!!! something went wrong.
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
export class ErrorComponent{

}
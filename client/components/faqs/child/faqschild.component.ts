import {Component,ViewChild,Input} from '@angular/core'
import {Faqschild} from '../../../../models/faqs'

@Component({
    moduleId:module.id,
    selector:'vb-faqschild', 
    templateUrl:'./faqschild.component.html'

})
export class FaqsChildComponent{
    @Input() faqs:Faqschild;
    showanswer:boolean=false;
    showcomment:boolean=false;
  constructor(){
      console.log(this.faqs)
  }
    
    toggalanswer(){
       this.showanswer=!this.showanswer;
       this.showcomment=false;
    }
    toggalcomment(){
        this.showanswer=false;
        this.showcomment=!this.showcomment;
     }
}
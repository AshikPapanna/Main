import {Component} from '@angular/core'
import {FaqsChildComponent} from './child/faqschild.component'
import {Faqschild} from '../../../models/faqs'
@Component({
    moduleId:module.id,
    selector:'vb-faqs',
    templateUrl:'./faqs.component.html',
    
})
export class FaqsComponent{
faqs:Faqschild[]=[{answer:"sdsdsd",question:"sdsdsd",comments:"Comment"},{answer:"sdsdsd",question:"sdsdsd",comments:"Comment"}];
constructor(){
console.log(this.faqs)
}
    
}
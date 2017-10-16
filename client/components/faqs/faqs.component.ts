import {Component,OnInit} from '@angular/core'
import {FaqsChildComponent} from './child/faqschild.component'
import {Faqschild} from '../../../models/faqs'
import{Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/switchMap'
import {FaqsService} from './faqs.service';
@Component({
    moduleId:module.id,
    selector:'vb-faqs',
    templateUrl:'./faqs.component.html',
    providers:[FaqsService]
    
})
export class FaqsComponent{
faqs:Faqschild[];
constructor(private faqsService:FaqsService ){


}
ngOnInit(){
    this.faqsService.getfaqs().subscribe(
        faqslist=>{
            this.faqs=faqslist;
        }
    )
}
    
}
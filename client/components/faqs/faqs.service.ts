import {Injectable,Inject} from '@angular/core';
import{Http,Response} from '@angular/http';
import {DOCUMENT} from '@angular/platform-browser';

import{Observable} from 'rxjs/Rx';

import {Faqschild} from  '../../../models/faqs';


import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';

@Injectable()
export class FaqsService{
constructor(private http:Http,@Inject(DOCUMENT) document:any){};
  getfaqs():Observable<Faqschild[]>{   
     return this.http.get(document.location.href)
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
}
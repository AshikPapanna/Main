import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Rx';

import {Faqschild} from  '../../../models/faqs';

import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';

@Injectable()
export class FaqsService{
constructor(private http:Http){};
  getfaqs():Observable<Faqschild[]>{
     return this.http.get('http://localhost:5000/faqs')
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
}
import {Injectable,Inject} from '@angular/core';
import{Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Rx';

import {Register} from  '../../../models/registration';

import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';
 import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class ForgotpasswordService{
constructor(private http:Http,@Inject(DOCUMENT) document:any){};
  forgotpassword(body:any):Observable<Register>{
     return this.http.post(document.location.href,body)
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
}
import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Rx';

import {Register} from  '../../../models/registration';

import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';

@Injectable()
export class ForgotpasswordService{
constructor(private http:Http){};
  forgotpassword(body:any):Observable<Register>{
     return this.http.post('http://localhost:5000/forgotpassword',body)
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
}
import {Injectable,Inject} from '@angular/core';
import{Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Rx';

import {Instructor} from  '../../../models/instructor';

import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';
 import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class InstructorService{
constructor(private http:Http,@Inject(DOCUMENT) document:any){};
  getinstructors():Observable<Instructor[]>{
      console.log(document.location.href+"/getinstructors");
     return this.http.get(document.location.href+"/getinstructors")
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
}
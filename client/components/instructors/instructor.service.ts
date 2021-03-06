import {Injectable,Inject} from '@angular/core';
import{Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Rx';

import {Instructor,InstructorDetails} from  '../../../models/instructor';
import {Location}from  '@angular/common'

import 'rxjs/add/operator/map';

 import 'rxjs/add/operator/catch';
 import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class InstructorService{
constructor(private http:Http,@Inject(DOCUMENT) document:any,private location :Location){};
  getinstructors():Observable<Instructor[]>{    
     return this.http.get(document.location.href+"/getinstructors")
     .map((res:Response)=>res.json())
     .catch((err:any)=>Observable.throw(err));
  }
    getinstructordetails(id:string):Observable<InstructorDetails>{
      console.log(id);
 return this.http.get(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/getinstructors/'+id  )
 .map((res:Response)=>{ console.log(res);return res.json();})
 .catch((err:any)=>{console.log(err); return Observable.throw(err)});
    }
}
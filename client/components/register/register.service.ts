import {Injectable,Inject} from '@angular/core';

import{Http,Response,Headers,RequestOptions} from '@angular/http';

import {Register} from  '../../../models/registration';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';


import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw'
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class RegisterService{
    constructor(private http:Http,@Inject(DOCUMENT) document:any){};
    
    register(body:Object):Observable<Register>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post(document.location.href,body,options)
        .map((res:Response)=>res.json())
         .catch(error=>{ return Observable.throw(error)})
    }
}



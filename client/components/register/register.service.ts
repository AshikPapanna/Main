import {Injectable} from '@angular/core';

import{Http,Response,Headers,RequestOptions} from '@angular/http';

import {Register} from  '../../../models/registration';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';


import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService{
    constructor(private http:Http){};
    
    register(body:Object):Observable<Register>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post('http://localhost:5000/register',body,options)
        .map((res:Response)=>res.json())
         .catch((error:any)=>error.json())
    }
}



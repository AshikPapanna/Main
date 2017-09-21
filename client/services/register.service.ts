import {Injectable} from '@angular/core';

import{Http,Response,Headers,RequestOptions} from '@angular/http';

import {Register} from  '../../models/registration';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';


import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService{
    constructor(private http:Http){};
    //register(body:Object):Observable<Register>{
        //return this.http.post('http://localhost:3000/')
   // }
}



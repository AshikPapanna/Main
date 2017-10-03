import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
import { LoginService } from '../login/login.service';
import { Profile } from '../../../models/profile';
import {Location } from '@angular/common';


@Injectable( 
)
export class ProfileService {
    constructor(private http: Http) {}
 
    getprofiles(): Observable<Profile[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'authorization': 'JWT ' + JSON.parse(localStorage.getItem('user')).token});
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
   return this.http.get('http://localhost:5000/profiles',options)
        .map((res:Response)=>{console.log(res);res || res.json()})
         .catch((error:any)=>Observable.throw(error))
    }
}
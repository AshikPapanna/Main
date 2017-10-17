import { Injectable,Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

 
import { LoginService } from '../login/login.service';
import { Profile } from '../../../models/profile';
import {DOCUMENT} from '@angular/platform-browser';
import {Location} from '@angular/common';



@Injectable( 
)
export class ProfileService {
    constructor(private http: Http,@Inject(DOCUMENT) document:any ,private location:Location) {}
     localtoken:string;
    getprofiles(tokenId:string): Observable<Profile[]> {      
        
        if(tokenId)
            {
                localStorage.setItem('user',JSON.stringify({token:tokenId}))
                this.localtoken=tokenId;
            }
            else{
                this.localtoken=JSON.parse(localStorage.getItem('user')).token;
            }            
        let headers = new Headers({ 'authorization': 'JWT ' +this.localtoken});
        let options = new RequestOptions({ headers: headers });      
      return this.http.get(document.location.href,options)
        .map((res:Response)=>{console.log(res);res || res.json()})
         .catch((error:any)=>Observable.throw(error))
    }
    getprofilesforhome():Observable<Profile[]>{       
      return this.http.get(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/profilesforhome', new RequestOptions({ })).map((res:Response)=>res.json())
    }
}
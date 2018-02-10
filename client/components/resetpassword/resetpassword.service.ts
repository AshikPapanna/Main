import {Injectable, Inject} from '@angular/core'
import{Location} from '@angular/common'

import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map'

import {DOCUMENT} from '@angular/platform-browser';
@Injectable()

export class ResetpasswordService {
    constructor(private http: Http, @Inject(DOCUMENT) document: any,private location:Location) {
    }
    getresetpassword(token:string): Observable<any> {      
        return this.http.get(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/resetpassword/'+token).map(
            res => {
              
            }).catch(err=> {
                console.log(err);
                return Observable.throw(err);
            });
    }
    postresetpassword(body:any,token:string):Observable<any>{
          return this.http.post(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/resetpassword/'+token,body)   .map((res:Response)=>
                               {let token =res.json()&&res.json().token
                                let usr=res.json() && res.json().user
                                if(token)
                                  {                              
                                    
                                    localStorage.setItem('user',JSON.stringify({user:usr,token:token}))
                                  return res;
                                  }
                                else{
                                  return res;
                                }
                              })
      .catch((error:any)=>Observable.throw(error.json().error||'server error'));
    }
       



}
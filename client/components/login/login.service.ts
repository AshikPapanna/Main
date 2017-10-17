import{Injectable,Inject} from '@angular/core'
import {Http,RequestOptions,Headers,Response} from '@angular/http'
import {Observable} from 'rxjs/Rx';
import {Login} from '../../../models/login'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class LoginService{
  public token:string;
    constructor(private http:Http,@Inject(DOCUMENT) document:any){
      var user=JSON.parse(localStorage.getItem('user'));
      this.token=user&& user.token;

    }
     login(body:Login):Observable<Login>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request optio
      return this.http.post(document.location.href,body,options)
                               .map((res:Response)=>
                               {let token =res.json()&&res.json().token
                                if(token)
                                  {
                                    
                                    this.token=token;
                                    localStorage.setItem('user',JSON.stringify({user:body.emailId,token:token}))
                                  return res;
                                  }
                                else{
                                  return res;
                                }
                              })
      .catch((error:any)=>Observable.throw(error.json().error||'server error'))

     }
    logout():void{
      this.token=null;
      localStorage.removeItem('user');
    }
}
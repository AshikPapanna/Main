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
                               {
                                 console.log("logged in successfully");
                                 let token =res.json()&&res.json().token;
                                 let user =res.json()&&res.json().user;
                                if(token)
                                  {                                   
                                    this.token=token;
                                    localStorage.setItem('user',JSON.stringify({user:user,token:token}))
                                    console.log(JSON.parse(localStorage.getItem('user')));
                                    return res;
                                  }
                                else{
                                  return res;
                                }
                              })
      .catch((error:any)=>{ return Observable.throw(error)})

     }
    logout():void{
      this.token=null;
      localStorage.removeItem('user');
    }
    islogedin()
    {
      if(localStorage.getItem('user')){
    return  JSON.parse(localStorage.getItem('user')).token;
      }
      else
        {
      return false;
        }
    }
}
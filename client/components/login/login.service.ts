import{Injectable} from '@angular/core'
import {Http,RequestOptions,Headers,Response} from '@angular/http'
import {Observable} from 'rxjs/Rx';
import {Login} from '../../../models/login'
import { Location}from '@angular/common'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService{
  public token:string;
    constructor(private http:Http,private location:Location){
      var user=JSON.parse(localStorage.getItem('user'));
      this.token=user&& user.token;

    }
     login(body:Login):Observable<Login>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request optio
      return this.http.post(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/login/',body,options)
                               .map((res:Response)=>
                               {let token =res.json()&&res.json().token
                                   let usr=res.json() && res.json().user
                                if(token)
                                  {
                                    
                                    this.token=token;
                                    localStorage.setItem('user',JSON.stringify({user:usr,token:token}))
                                  return res;
                                  }
                                else{
                                  return res;
                                }
                              })
      .catch((error:any)=>{
        console.log(error);
      return  Observable.throw(error||'server error')})

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
import{Injectable} from '@angular/core'
import {Http,RequestOptions,Headers,Response} from '@angular/http'
import {Observable} from 'rxjs/Rx';
import {Login} from '../../../models/login'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService{
    constructor(private http:Http){}
     login(body:Object):Observable<Login>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request optio
      return this.http.post('http://localhost:3000/login',body,options)
                               .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error.json().error||'server error'))

     }
}
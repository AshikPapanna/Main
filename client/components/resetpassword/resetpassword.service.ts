import {Injectable, Inject} from '@angular/core'

import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map'

import {DOCUMENT} from '@angular/platform-browser';
@Injectable()

export class ResetpasswordService {
    constructor(private http: Http, @Inject(DOCUMENT) document: any) {
    }
    getresetpassword(): Observable<any> {
        return this.http.get(document.location.href).map(
            res => {
                return res.json();
            },
            err => {
                return Observable.throw(err);
            })
    }



}
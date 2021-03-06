"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
const common_1 = require("@angular/common");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let LoginService = class LoginService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        var user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
    }
    login(body) {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new http_1.RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/login/', body, options)
            .map((res) => {
            let token = res.json() && res.json().token;
            let usr = res.json() && res.json().user;
            if (token) {
                this.token = token;
                localStorage.setItem('user', JSON.stringify({ user: usr, token: token }));
                return res;
            }
            else {
                return res;
            }
        })
            .catch((error) => {
            console.log(error);
            return Rx_1.Observable.throw(error || 'server error');
        });
    }
    logout() {
        this.token = null;
        localStorage.removeItem('user');
    }
    islogedin() {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user')).token;
        }
        else {
            return false;
        }
    }
};
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, common_1.Location])
], LoginService);
exports.LoginService = LoginService;

//# sourceMappingURL=login.service.js.map

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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
<<<<<<< HEAD
var LoginService = /** @class */ (function () {
    function LoginService(http) {
=======
const platform_browser_1 = require("@angular/platform-browser");
let LoginService = class LoginService {
    constructor(http, document) {
>>>>>>> c0705813456b3c7e389331089f9975a2e2c195a1
        this.http = http;
        var user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
    }
<<<<<<< HEAD
    LoginService.prototype.login = function (body) {
        var _this = this;
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post('http://ashikp.herokuapp.com/login', body, options)
            .map(function (res) {
            var token = res.json() && res.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('user', JSON.stringify({ user: body.emailId, token: token }));
=======
    login(body) {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new http_1.RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post(document.location.href, body, options)
            .map((res) => {
            console.log("logged in successfully");
            let token = res.json() && res.json().token;
            let user = res.json() && res.json().user;
            if (token) {
                this.token = token;
                localStorage.setItem('user', JSON.stringify({ user: user, token: token }));
                console.log(JSON.parse(localStorage.getItem('user')));
>>>>>>> c0705813456b3c7e389331089f9975a2e2c195a1
                return res;
            }
            else {
                return res;
            }
        })
<<<<<<< HEAD
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'server error'); });
    };
    LoginService.prototype.logout = function () {
=======
            .catch((error) => { return Rx_1.Observable.throw(error); });
    }
    logout() {
>>>>>>> c0705813456b3c7e389331089f9975a2e2c195a1
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
<<<<<<< HEAD
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
=======
    }
};
LoginService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], LoginService);
>>>>>>> c0705813456b3c7e389331089f9975a2e2c195a1
exports.LoginService = LoginService;

//# sourceMappingURL=login.service.js.map

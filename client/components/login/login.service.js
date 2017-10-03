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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        var user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
    }
    LoginService.prototype.login = function (body) {
        var _this = this;
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request optio
        return this.http.post('http://localhost:5000/login', body, options)
            .map(function (res) {
            var token = res.json() && res.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('user', JSON.stringify({ user: body.emailId, token: token }));
                return res;
            }
            else {
                return res;
            }
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'server error'); });
    };
    LoginService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('user');
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
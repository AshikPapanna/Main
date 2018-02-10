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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
const platform_browser_1 = require("@angular/platform-browser");
let ResetpasswordService = class ResetpasswordService {
    constructor(http, document, location) {
        this.http = http;
        this.location = location;
    }
    getresetpassword(token) {
        return this.http.get(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/resetpassword/' + token).map(res => {
        }).catch(err => {
            console.log(err);
            return Rx_1.Observable.throw(err);
        });
    }
    postresetpassword(body, token) {
        return this.http.post(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/resetpassword/' + token, body).map((res) => {
            let token = res.json() && res.json().token;
            let usr = res.json() && res.json().user;
            if (token) {
                localStorage.setItem('user', JSON.stringify({ user: usr, token: token }));
                return res;
            }
            else {
                return res;
            }
        })
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'server error'));
    }
};
ResetpasswordService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [http_1.Http, Object, common_1.Location])
], ResetpasswordService);
exports.ResetpasswordService = ResetpasswordService;

//# sourceMappingURL=resetpassword.service.js.map

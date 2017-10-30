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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, document, location) {
        this.http = http;
        this.location = location;
    }
    ProfileService.prototype.getprofiles = function (tokenId) {
        if (tokenId) {
            localStorage.setItem('user', JSON.stringify({ token: tokenId }));
            this.localtoken = tokenId;
        }
        else {
            this.localtoken = JSON.parse(localStorage.getItem('user')).token;
        }
        var headers = new http_1.Headers({ 'authorization': 'JWT ' + this.localtoken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(document.location.href, options)
            .map(function (res) { console.log(res); res || res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error); });
    };
    ProfileService.prototype.getprofilesforhome = function () {
        return this.http.get(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/profilesforhome', new http_1.RequestOptions({})).map(function (res) { return res.json(); });
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [http_1.Http, Object, common_1.Location])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;

//# sourceMappingURL=profile.service.js.map

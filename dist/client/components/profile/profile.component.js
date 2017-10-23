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
var profile_1 = require("../../../models/profile");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var profile_service_1 = require("./profile.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileservice, route) {
        this.profileservice = profileservice;
        this.route = route;
        this.higherindex = 3;
        this.lowerindex = 0;
    }
    ;
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isfromhomeview) {
            this.profileservice.getprofilesforhome().subscribe(function (profile) {
                _this.profiles = profile;
                _this.filteredprofile = _this.profiles.slice(_this.lowerindex, _this.higherindex);
                console.log(_this.filteredprofile);
            }, function (err) {
                console.log(err);
            });
        }
        this.route.params
            .switchMap(function (params) { return _this.profileservice.getprofiles(params['tokenId']); })
            .subscribe(function (user) {
            console.log('success');
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.rotar = function (isadd) {
        if (isadd) {
            if (this.higherindex != this.profiles.length) {
                this.lowerindex = this.lowerindex + 1;
                this.higherindex = this.higherindex + 1;
            }
        }
        else {
            if (this.lowerindex != 0) {
                this.lowerindex = this.lowerindex - 1;
                this.higherindex = this.higherindex - 1;
            }
        }
        this.filteredprofile = this.profiles.slice(this.lowerindex, this.higherindex);
    };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", profile_1.Profile)
    ], ProfileComponent.prototype, "profile", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProfileComponent.prototype, "isfromhomeview", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-profile',
            templateUrl: './profile.component.html',
            providers: [profile_service_1.ProfileService],
            inputs: ['isfromhomeview'],
            animations: []
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            router_1.ActivatedRoute])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=profile.component.js.map

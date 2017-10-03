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
var profile_service_1 = require("./profile.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileservice) {
        this.profileservice = profileservice;
    }
    ;
    ProfileComponent.prototype.ngOnInit = function () {
        this.profileservice.getprofiles().subscribe(function (user) {
            console.log('success');
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", profile_1.Profile)
    ], ProfileComponent.prototype, "profile", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-profile',
            templateUrl: './profile.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=profile.component.js.map

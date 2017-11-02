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
const profile_1 = require("../../../models/profile");
const router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
const profile_service_1 = require("./profile.service");
const animations_1 = require("@angular/animations");
let ProfileComponent = class ProfileComponent {
    constructor(profileservice, route) {
        this.profileservice = profileservice;
        this.route = route;
        this.higherindex = 3;
        this.lowerindex = 0;
    }
    ;
    ngOnInit() {
        if (this.isfromhomeview) {
            this.profileservice.getprofilesforhome().subscribe(profile => {
                this.profiles = profile;
                this.filteredprofile = this.profiles.slice(this.lowerindex, this.higherindex);
                console.log(this.filteredprofile);
            }, err => {
                console.log(err);
            });
        }
        this.route.params
            .switchMap((params) => this.profileservice.getprofiles(params['tokenId']))
            .subscribe(user => {
            console.log('success');
        }, err => {
            console.log(err);
        });
    }
    rotar(isadd) {
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
    }
    ;
};
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
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.state('in', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                animations_1.transition('void => *', [
                    animations_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    animations_1.animate('0.2s ease-in')
                ]),
                animations_1.transition('* => void', [
                    animations_1.animate('0.2s 0.1s ease-out', animations_1.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=profile.component.js.map

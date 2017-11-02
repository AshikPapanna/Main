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
const router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
const forgotpassword_service_1 = require("./forgotpassword.service");
const registration_1 = require("../../../models/registration");
let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(forgotpasswordService, route) {
        this.forgotpasswordService = forgotpasswordService;
        this.route = route;
        this.register = new registration_1.Register('', '', '', '', '', '', '', '');
        this.confirmpasswordclass = '';
        this.passwordclass = '';
        this.IsSuccess = false;
        this.emailvalidateclass = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe((par) => { this.register.email = par['emailid']; });
    }
    validateemail(email) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            this.emailvalidateclass = 'valid';
            return true;
        }
        else {
            this.emailvalidateclass = 'invalid';
            return false;
        }
    }
    comparePassword(password, confirmpassword) {
        if (password !== confirmpassword) {
            this.confirmpasswordclass = 'invalid';
            return false;
        }
        else {
            this.confirmpasswordclass = 'valid';
            return true;
        }
    }
    Validatepasswordlength(password) {
        if (password.length < 8 || password.length > 20) {
            this.passwordclass = 'invalid';
            return false;
        }
        else {
            this.passwordclass = 'valid';
            return true;
        }
    }
    onSubmit() {
        if (!(this.Validatepasswordlength(this.register.password)
            && this.comparePassword(this.register.password, this.register.confirmpassword))) {
            return false;
        }
        this.forgotpasswordService.forgotpassword(this.register).subscribe(user => {
            this.IsSuccess = true;
        }, err => {
            console.log(err);
            if (err._body && JSON.parse(err._body).email && JSON.parse(err._body).email) {
                this.emailvalidateclass = 'invalid';
                this.IsSuccess = false;
            }
        });
    }
    ;
};
ForgotpasswordComponent = __decorate([
    core_1.Component({
        selector: 'sa-forgotpassword',
        moduleId: module.id,
        templateUrl: './forgotpassword.component.html',
        styleUrls: ['./forgotpassword.component.css'],
        providers: [forgotpassword_service_1.ForgotpasswordService]
    }),
    __metadata("design:paramtypes", [forgotpassword_service_1.ForgotpasswordService, router_1.ActivatedRoute])
], ForgotpasswordComponent);
exports.ForgotpasswordComponent = ForgotpasswordComponent;

//# sourceMappingURL=forgotpassword.component.js.map

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
const forms_1 = require("@angular/forms");
let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(forgotpasswordService, fb, router) {
        this.forgotpasswordService = forgotpasswordService;
        this.fb = fb;
        this.router = router;
        this.createform();
    }
    createform() {
        this.fpform = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]]
        });
    }
    isvalidfield(field) {
        return this.fpform.get(field).invalid && this.fpform.get(field).touched;
    }
    onSubmit() {
        this.forgotpasswordService.forgotpassword(this.fpform.value).subscribe(user => {
            this.router.navigate(['/registersuccessfull']);
        }, err => {
            console.log(err);
            if (err._body && JSON.parse(err._body).email && JSON.parse(err._body).email) {
                this.fpform.controls['email'].setErrors({ 'invalid': true });
            }
        });
    }
    ;
};
ForgotpasswordComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './forgotpassword.component.html',
        styleUrls: ['./forgotpassword.component.css'],
        providers: [forgotpassword_service_1.ForgotpasswordService]
    }),
    __metadata("design:paramtypes", [forgotpassword_service_1.ForgotpasswordService, forms_1.FormBuilder, router_1.Router])
], ForgotpasswordComponent);
exports.ForgotpasswordComponent = ForgotpasswordComponent;

//# sourceMappingURL=forgotpassword.component.js.map

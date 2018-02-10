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
const login_service_1 = require("./login.service");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
let LoginComponent = class LoginComponent {
    constructor(loginservice, route, fb) {
        this.loginservice = loginservice;
        this.route = route;
        this.fb = fb;
        this.createform();
    }
    ngOnInit() {
        if (this.loginservice.islogedin()) {
            window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
        }
    }
    ;
    createform() {
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(12)]]
        });
    }
    isvalidfield(field) {
        return this.loginForm.get(field).invalid && this.loginForm.get(field).touched;
    }
    onSubmit() {
        this.loginservice.login(this.loginForm.value).subscribe(user => {
            console.log(user);
            window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
        }, err => {
            console.log(err);
            if (err._body && JSON.parse(err._body).message && JSON.parse(err._body).message.email) {
                this.loginForm.controls['email'].setErrors({ 'invalid': true });
            }
            if (err._body && JSON.parse(err._body).message && JSON.parse(err._body).message.password) {
                this.loginForm.controls['password'].setErrors({ 'invalid': true });
            }
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map

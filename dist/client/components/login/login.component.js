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
const login_1 = require("../../../models/login");
const login_service_1 = require("./login.service");
const router_1 = require("@angular/router");
let LoginComponent = class LoginComponent {
    constructor(loginservice, route) {
        this.loginservice = loginservice;
        this.route = route;
        this.emailvalidateclass = '';
        this.passwordclass = '';
        this.login = new login_1.Login('', '', '');
    }
    ;
    /* closeNav(){
         document.getElementById("mySidenav").style.width = "0%";
     }
     registerclick(){
         document.getElementById("mySidenav").style.width = "0%";
         document.getElementById("mySidenavforregister").style.width = "30%";
     }*/
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
        console.log(this.login);
        this.loginservice.login(this.login).subscribe(user => {
            console.log(user);
            window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
        }, err => {
            console.log(err);
            if (err._body && JSON.parse(err._body).message && JSON.parse(err._body).message.email) {
                this.emailvalidateclass = 'invalid';
            }
            if (err._body && JSON.parse(err._body).message && JSON.parse(err._body).message.password) {
                this.passwordclass = 'invalid';
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
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map

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
const registration_1 = require("../../../models/registration");
const register_service_1 = require("./register.service");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
let RegisterComponent = class RegisterComponent {
    constructor(registerService, router, location) {
        this.registerService = registerService;
        this.router = router;
        this.location = location;
        this.firstNamevalidateclass = '';
        this.confirmpasswordclass = '';
        this.passwordclass = '';
        this.lastnameclass = '';
        this.emailvalidateclass = '';
        this.IsSuccess = false;
        this.register = new registration_1.Register('', '', '', '', '', '', '', '');
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
    validatelastname(lastname) {
        if (lastname.length < 2 || lastname.length > 20) {
            this.lastnameclass = 'invalid';
            return false;
        }
        else {
            this.lastnameclass = 'valid';
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
        if (!(this.validatefirstname(this.register.firstname)
            && this.Validatepasswordlength(this.register.password)
            && this.comparePassword(this.register.password, this.register.confirmpassword)
            && this.validatelastname(this.register.lastname) && this.validateemail(this.register.email))) {
            console.log('right');
            return false;
        }
        console.log('wrong');
        this.registerService.register(this.register).subscribe(user => {
            this.IsSuccess = true;
            console.log(user);
            localStorage.setItem('username', JSON.stringify({ username: user.firstname }));
            window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
        }, err => {
            if (err._body && JSON.parse(err._body).message && JSON.parse(err._body).message.email) {
                this.emailvalidateclass = 'invalid';
                this.IsSuccess = false;
            }
        });
    }
    ;
    validatefirstname(firstname) {
        if (firstname.length < 4 || firstname.length > 20) {
            this.firstNamevalidateclass = 'invalid';
            return false;
        }
        else {
            this.firstNamevalidateclass = 'valid';
            return true;
        }
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
};
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css'],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [register_service_1.RegisterService,
        router_1.Router, common_1.Location])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=register.component.js.map

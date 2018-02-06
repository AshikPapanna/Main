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
const register_service_1 = require("./register.service");
const common_1 = require("@angular/common");
const countries_1 = require("../../constants/countries");
const router_1 = require("@angular/router");
require("materialize-css");
require("rxjs/add/operator/map");
const forms_1 = require("@angular/forms");
let RegisterComponent = class RegisterComponent {
    constructor(registerService, formbuilder, router, location) {
        this.registerService = registerService;
        this.formbuilder = formbuilder;
        this.router = router;
        this.location = location;
        this.agelist = [];
        this.createform();
        var i;
        this.countrylist = countries_1.CountryList;
        for (i = 6; i <= 40; i++) {
            this.agelist.push(i);
        }
    }
    createform() {
        this.registerform = this.formbuilder.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(12)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(12)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email], this.checkisemailunique.bind(this)],
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(8)]],
            gender: 'M',
            age: ['6', [forms_1.Validators.max(60), forms_1.Validators.min(6)]],
            country: ['India', [forms_1.Validators.required]]
        });
    }
    checkisemailunique(control) {
        return this.registerService.checkisemailunique({ email: control.value })
            .map(data => {
            if (data) {
                if (data.message === "failed") {
                    return { "emailtaken": true };
                }
                else {
                    return null;
                }
            }
        }, err => {
            return { "eeeror": true };
        });
    }
    ;
    isvalidfield(field) {
        return this.registerform.get(field).invalid && this.registerform.get(field).touched;
    }
    onSubmit() {
        this.registerService.register(this.registerform.value).subscribe(data => {
            this.registerform.reset();
        }, err => {
            console.log(err);
        });
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
    __metadata("design:paramtypes", [register_service_1.RegisterService, forms_1.FormBuilder,
        router_1.Router, common_1.Location])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=register.component.js.map

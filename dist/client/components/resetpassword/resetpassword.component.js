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
const resetpassword_service_1 = require("./resetpassword.service");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
let ResetpasswordComponent = class ResetpasswordComponent {
    constructor(resetpasswordService, fb, route, router, ngzone) {
        this.resetpasswordService = resetpasswordService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.ngzone = ngzone;
        this.createform();
    }
    createform() {
        this.loginform = this.fb.group({
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(12)]],
            confirmpassword: ['', [forms_1.Validators.required, this.checkpasswordmatches.bind(this)]]
        });
    }
    checkpasswordmatches(control) {
        if (this.loginform)
            return (control.value === this.loginform.get('password').value) ? null : { 'donotmatch': true };
        else
            return null;
    }
    isvalidfield(field) {
        return this.loginform.get(field).invalid && this.loginform.get(field).touched;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.token = params['tokenId'];
        });
        console.log(this.token);
        if (this.token) {
            this.resetpasswordService.getresetpassword(this.token).subscribe(user => { }, err => {
                this.err = true;
            });
        }
        else {
            this.err = true;
        }
        if (this.err) {
            this.ngzone.run(() => this.router.navigateByUrl['/error']);
        }
    }
    onSubmit() {
        this.resetpasswordService.postresetpassword(this.loginform.value, this.token).subscribe(user => {
            window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
        });
    }
};
ResetpasswordComponent = __decorate([
    core_1.Component({
        templateUrl: './resetpassword.component.html',
        providers: [resetpassword_service_1.ResetpasswordService],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [resetpassword_service_1.ResetpasswordService, forms_1.FormBuilder, router_1.ActivatedRoute,
        router_1.Router,
        core_1.NgZone])
], ResetpasswordComponent);
exports.ResetpasswordComponent = ResetpasswordComponent;

//# sourceMappingURL=resetpassword.component.js.map

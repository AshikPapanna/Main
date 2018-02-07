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
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(resetpasswordService) {
        this.resetpasswordService = resetpasswordService;
    }
    ngOnInit() {
        this.resetpasswordService.getresetpassword().subscribe(user => { }, err => { });
    }
};
ResetPasswordComponent = __decorate([
    core_1.Component({
        templateUrl: './resetpassword.component.html',
        providers: [resetpassword_service_1.ResetpasswordService]
    }),
    __metadata("design:paramtypes", [resetpassword_service_1.ResetpasswordService])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;

//# sourceMappingURL=resetpassword.component.js.map

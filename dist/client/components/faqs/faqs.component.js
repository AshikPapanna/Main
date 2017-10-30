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
require("rxjs/add/operator/switchMap");
var faqs_service_1 = require("./faqs.service");
var FaqsComponent = /** @class */ (function () {
    function FaqsComponent(faqsService) {
        this.faqsService = faqsService;
    }
    FaqsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faqsService.getfaqs().subscribe(function (faqslist) {
            _this.faqs = faqslist;
        });
    };
    FaqsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vb-faqs',
            templateUrl: './faqs.component.html',
            providers: [faqs_service_1.FaqsService]
        }),
        __metadata("design:paramtypes", [faqs_service_1.FaqsService])
    ], FaqsComponent);
    return FaqsComponent;
}());
exports.FaqsComponent = FaqsComponent;

//# sourceMappingURL=faqs.component.js.map

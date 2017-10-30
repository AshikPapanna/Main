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
var Maxlength = /** @class */ (function () {
    function Maxlength(elref, rendr) {
        this.elref = elref;
        this.rendr = rendr;
        this.onerror = new core_1.EventEmitter();
    }
    Maxlength.prototype.onblur = function () {
        if (this.elref.nativeElement.value.length > this.maxLength) {
            this.onerror.emit(null);
            this.rendr.setElementClass(this.elref.nativeElement, 'valid', false);
            this.rendr.setElementClass(this.elref.nativeElement, 'invalid', true);
        }
        else {
            this.rendr.setElementClass(this.elref.nativeElement, 'invalid', false);
            this.rendr.setElementClass(this.elref.nativeElement, 'valid', true);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Maxlength.prototype, "maxLength", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Maxlength.prototype, "onerror", void 0);
    __decorate([
        core_1.HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Maxlength.prototype, "onblur", null);
    Maxlength = __decorate([
        core_1.Directive({
            selector: '[maxLength]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], Maxlength);
    return Maxlength;
}());
exports.Maxlength = Maxlength;

//# sourceMappingURL=maxlength.directive.js.map

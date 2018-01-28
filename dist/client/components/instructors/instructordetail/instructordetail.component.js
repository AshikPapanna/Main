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
const instructor_service_1 = require("./../instructor.service");
let InstructordetailComponent = class InstructordetailComponent {
    constructor(instructorService) {
        this.instructorService = instructorService;
        this.close = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.instructorService.getinstructordetails(this.instructordetails).subscribe(details => {
            this.instructordetail = details[0];
            console.log(this.instructordetail);
        }, err => {
            console.log(err);
        });
    }
    closemodal() {
        this.close.emit(null);
    }
    set data(data) {
        this._data = data;
    }
    get instructordetails() {
        return this._data;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], InstructordetailComponent.prototype, "data", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InstructordetailComponent.prototype, "close", void 0);
InstructordetailComponent = __decorate([
    core_1.Component({
        selector: 'sa-instructormodal',
        moduleId: module.id,
        styleUrls: ['./instructordetail.component.css'],
        templateUrl: './instructordetail.component.html'
    }),
    __metadata("design:paramtypes", [instructor_service_1.InstructorService])
], InstructordetailComponent);
exports.InstructordetailComponent = InstructordetailComponent;

//# sourceMappingURL=instructordetail.component.js.map

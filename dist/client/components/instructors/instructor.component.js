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
const instructor_service_1 = require("./instructor.service");
let InstructorComponent = class InstructorComponent {
    constructor(instructorService) {
        this.instructorService = instructorService;
        this.distinctspecialization = [];
        this.specialization = [];
        this.showmodel = false;
    }
    ngOnInit() {
        this.instructorService.getinstructors().subscribe(instructors => {
            this.instructors = instructors;
            this.instructors.forEach(element => {
                this.specialization.push(element.specialized);
            });
            this.distinctspecialization = this.specialization.filter((v, i, a) => a.indexOf(v) === i);
        }, err => { console.log(err); });
    }
    ngAfterViewInit() {
        /* jQuery(document).ready(function(){
         $('.modal').modal();
         })*/
    }
    closemodal() {
        this.showmodel = false;
    }
    getspecializtiondetails(specialization) {
        console.log(specialization);
        return this.instructors.filter(this.filterbasedonspcl, specialization);
        // return this.distinctspecialization;
    }
    filterbasedonspcl(value, index) {
        /*return value.find(function(ele){
                   return ele===this.toString();
                  },this);*/
    }
    getspecializationdetails(id) {
        this.showmodel = true;
        this.instructorService.getinstructordetails(id).subscribe(details => {
            this.data = details;
        }, err => {
            console.log(err);
        });
    }
};
InstructorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './instructor.component.html',
        styleUrls: ['./instructor.component.css'],
        providers: [instructor_service_1.InstructorService]
    }),
    __metadata("design:paramtypes", [instructor_service_1.InstructorService])
], InstructorComponent);
exports.InstructorComponent = InstructorComponent;

//# sourceMappingURL=instructor.component.js.map

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
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
    }
    clearimagesrc() {
        this.Registerimgsrc = "../../../public/images/Register.svg";
        this.selectcourseimgsrc = "../../../public/images/SelectCourse.svg";
    }
    ;
    changestep(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        /*console.log(idAttr);
        console.log(value);
        jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
        jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
        jQuery('.sa-step-link').removeClass();
        
        this.clearimagesrc();
        jQuery("#"+value+" b").addClass('sa-step-link');*/
        jQuery(".sa-imgcir-container").removeClass("sa-imgcir-container-act");
        jQuery("#" + value).addClass('sa-imgcir-container-act');
        var index = this.sarangworksteps.sarangworksteps.findIndex(function (item, i) {
            return item.heading.replace(/\s+/g, '') == value.replace(/\s+/g, '');
        });
        this.stepheading = this.sarangworksteps.sarangworksteps[index].heading;
        this.stepdesc = this.sarangworksteps.sarangworksteps[index].desc;
    }
    ngOnInit() {
        this.sarangworksteps = {
            "sarangworksteps": [
                {
                    "heading": "Register",
                    "desc": "Fill out your basic information and sign up!"
                },
                {
                    "heading": "Select a course",
                    "desc": "Choose a course from our repository that you are interested in learning."
                },
                {
                    "heading": "Select your proficiency",
                    "desc": "There are two levels - Basic and Skilled - which are available for all the courses. Select the one that best suits your requirements."
                },
                {
                    "heading": "Start learning",
                    "desc": "Learn anytime and anywhere - it's that's simple. "
                }
            ]
        };
        this.stepheading = this.sarangworksteps.sarangworksteps[0].heading;
        this.stepdesc = this.sarangworksteps.sarangworksteps[0].desc;
        this.Registerimgsrc = this.sarangworksteps.sarangworksteps[0].beforesrc;
        /*console.log(this.route);
          this.route.params.subscribe((par:Params)=>{console.log(par); this.username= par['name']
         this.isFromRegister= par['ifr']})
         console.log(this.username);
         console.log(this.isFromRegister);*/
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map

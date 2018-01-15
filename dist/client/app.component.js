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
const app_routeanimation_1 = require("./app.routeanimation");
const login_service_1 = require("./components/login/login.service");
const animations_1 = require("@angular/animations");
const common_1 = require("@angular/common");
const query = (s, a, o = { optional: true }) => animations_1.query(s, a, o);
exports.homeTransition = animations_1.trigger('footerTransition', [
    animations_1.transition(':enter', [
        //padding:2%;background-color: #464546  ;position: relative;
        query('.sa-footer-con', animations_1.style({ opacity: 0 })),
        query('.sa-sitmap-tab', animations_1.style({ opacity: 0 })),
        query('.sa-footer-con', animations_1.stagger(400, [
            animations_1.style({ transform: 'translateY(100px)' }),
            animations_1.animate('3s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
        query('.sa-sitmap-tab', animations_1.stagger(400, [
            animations_1.style({ transform: 'translateY(100px)' }),
            animations_1.animate('3s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    animations_1.transition(':leave', [
        query('.sa-footer-con', animations_1.stagger(300, [
            animations_1.style({ transform: 'translateY(0px)', opacity: 1 }),
            animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);
let AppComponent = class AppComponent {
    constructor(loginService, location) {
        this.loginService = loginService;
        this.location = location;
    }
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
    ngOnInit() {
        if (this.loginService.islogedin()) {
            var user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            this.username = user.user && user.user.firstname;
        }
    }
    logout() {
        this.loginService.logout();
        window.location.replace(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''));
    }
    isloggedin() {
        console.log('islogin');
        return this.loginService.islogedin();
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        animations: [app_routeanimation_1.routerTransition, exports.homeTransition],
        providers: [login_service_1.LoginService],
        host: {
            "[@footerTransition]": ''
        }
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map

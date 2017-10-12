"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var minlength_directive_1 = require("./directives/minlength.directive");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var profile_component_1 = require("./components/profile/profile.component");
var register_component_1 = require("./components/register/register.component");
var home_component_1 = require("./components/home/home.component");
var forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
var faqs_component_1 = require("./components/faqs/faqs.component");
var approutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'faqs',
        component: faqs_component_1.FaqsComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'forgotpassword/:emailid',
        component: forgotpassword_component_1.ForgotpasswordComponent
    },
    {
        path: 'forgotpassword',
        component: forgotpassword_component_1.ForgotpasswordComponent
    },
    {
        path: 'profiles',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'profiles/:tokenId',
        component: profile_component_1.ProfileComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                material_1.MdButtonModule,
                material_1.MdCheckboxModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(approutes)],
            declarations: [app_component_1.AppComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent, register_component_1.RegisterComponent,
                forgotpassword_component_1.ForgotpasswordComponent,
                home_component_1.HomeComponent,
                minlength_directive_1.Minlength,
                faqs_component_1.FaqsComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map

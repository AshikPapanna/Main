"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const minlength_directive_1 = require("./directives/minlength.directive");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
const login_component_1 = require("./components/login/login.component");
const profile_component_1 = require("./components/profile/profile.component");
const register_component_1 = require("./components/register/register.component");
const home_component_1 = require("./components/home/home.component");
const forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
const faqs_component_1 = require("./components/faqs/faqs.component");
const faqschild_component_1 = require("./components/faqs/child/faqschild.component");
const footer_component_1 = require("./components/footer/footer.component");
//import{InstructorComponent} from './components/instructors/instructor.component'
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routes_1.AppRoutes],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            profile_component_1.ProfileComponent, register_component_1.RegisterComponent,
            forgotpassword_component_1.ForgotpasswordComponent,
            home_component_1.HomeComponent,
            minlength_directive_1.Minlength,
            faqschild_component_1.FaqsChildComponent,
            faqs_component_1.FaqsComponent, footer_component_1.FooterComponent
            //,InstructorComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map

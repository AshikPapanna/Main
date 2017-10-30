"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var profile_component_1 = require("./components/profile/profile.component");
var register_component_1 = require("./components/register/register.component");
var home_component_1 = require("./components/home/home.component");
var forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
var faqs_component_1 = require("./components/faqs/faqs.component");
var approutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        data: { state: 'home' }
    },
    {
        path: 'home/:name/:ifr',
        component: home_component_1.HomeComponent,
        data: { state: 'home' }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: { state: 'login' }
    },
    {
        path: 'faqs',
        component: faqs_component_1.FaqsComponent,
        data: { state: 'faqs' }
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        data: { state: 'register' }
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
exports.AppRoutes = router_1.RouterModule.forRoot(approutes);

//# sourceMappingURL=app.routes.js.map

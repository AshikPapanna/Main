"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const login_component_1 = require("./components/login/login.component");
const profile_component_1 = require("./components/profile/profile.component");
const register_component_1 = require("./components/register/register.component");
const home_component_1 = require("./components/home/home.component");
const forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
const faqs_component_1 = require("./components/faqs/faqs.component");
const instructor_component_1 = require("./components/instructors/instructor.component");
const aboutus_component_1 = require("./components/aboutus/aboutus.component");
const registersuccessfull_component_1 = require("./components/registersuccessfull/registersuccessfull.component");
const resetpassword_component_1 = require("./components/resetpassword/resetpassword.component");
const error_component_1 = require("./error.component");
const approutes = [
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
        path: 'forgotpassword',
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
        path: 'instructors',
        component: instructor_component_1.InstructorComponent
    },
    {
        path: 'instructors/:id',
        component: instructor_component_1.InstructorComponent
    },
    {
        path: 'profiles/:tokenId',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'resetpassword/:tokenId',
        component: resetpassword_component_1.ResetpasswordComponent
    },
    {
        path: 'aboutus',
        component: aboutus_component_1.AboutusComponent
    },
    {
        path: 'registersuccessfull',
        component: registersuccessfull_component_1.RegistersuccessfullComponent
    },
    {
        path: 'error',
        component: error_component_1.ErrorComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '*',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(approutes);

//# sourceMappingURL=app.routes.js.map

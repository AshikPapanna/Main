"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const login_component_1 = require("./components/login/login.component");
const profile_component_1 = require("./components/profile/profile.component");
const register_component_1 = require("./components/register/register.component");
const home_component_1 = require("./components/home/home.component");
const forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
const faqs_component_1 = require("./components/faqs/faqs.component");
const approutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        data: { state: 'home' }
    },
     {
      path:'home/:name/:ifr',
      component:HomeComponent,
      data:{state:'home'}
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
    },
    {
        path: '*',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(approutes);

//# sourceMappingURL=app.routes.js.map

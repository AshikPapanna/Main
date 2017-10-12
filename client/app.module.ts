import { BrowserModule } from "@angular/platform-browser";
 

import{NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import{HttpModule} from '@angular/http'

import{RouterModule,Routes} from '@angular/router'

import{Minlength} from './directives/minlength.directive'

import {AppComponent} from './app.component';

import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import{RegisterComponent} from './components/register/register.component';
import{HomeComponent} from './components/home/home.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {FaqsComponent} from './components/faqs/faqs.component';
const approutes:Routes=[
    {
     path:'home',
     component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'faqs',
        component:FaqsComponent
                    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forgotpassword/:emailid',
        component:ForgotpasswordComponent
    },
    {
        path:'forgotpassword',
          component:ForgotpasswordComponent
    },
    {
path:'profiles',
component:ProfileComponent
    },
    {
        path:'profiles/:tokenId',
        component:ProfileComponent
            },
      
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
]



@NgModule({
    imports:[BrowserModule,
        FormsModule,
        MdButtonModule,
         MdCheckboxModule,
         HttpModule,
        RouterModule.forRoot(approutes)],
    declarations:[AppComponent
        ,LoginComponent
        ,ProfileComponent,RegisterComponent
        ,ForgotpasswordComponent
        ,HomeComponent
        ,Minlength
    ,FaqsComponent],

     bootstrap:[AppComponent]
})
export class AppModule{


}

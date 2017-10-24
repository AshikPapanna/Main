import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
 

import{NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';

 

import{HttpModule} from '@angular/http'

import{RouterModule,Routes} from '@angular/router'

import{Minlength} from './directives/minlength.directive'

import {AppComponent} from './app.component';
import{AppRoutes} from './app.routes'

import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import{RegisterComponent} from './components/register/register.component';
import{HomeComponent} from './components/home/home.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {FaqsComponent} from './components/faqs/faqs.component';
import{FaqsChildComponent} from './components/faqs/child/faqschild.component'


@NgModule({
    
    imports:[BrowserModule,
        FormsModule,       
         HttpModule,
         AppRoutes],
    declarations:[AppComponent
        ,LoginComponent
        ,ProfileComponent,RegisterComponent
        ,ForgotpasswordComponent
        ,HomeComponent
        ,Minlength
        ,FaqsChildComponent
    ,FaqsComponent],
    

     bootstrap:[AppComponent]
})
export class AppModule{
  
 
}

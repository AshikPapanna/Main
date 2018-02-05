import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
 
import{NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'; 

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
import {FooterComponent} from './components/footer/footer.component'
import{InstructorComponent} from './components/instructors/instructor.component'
import {InstructordetailComponent} from  './components/instructors/instructordetail/instructordetail.component'
import{AboutusComponent} from './components/aboutus/aboutus.component';

import { MaterializeModule } from 'angular2-materialize';


@NgModule({
    
    imports:[BrowserModule,BrowserAnimationsModule,ReactiveFormsModule
       , FormsModule,       
         HttpModule,
         AppRoutes,MaterializeModule ],
    declarations:[AppComponent
        ,LoginComponent
        ,ProfileComponent,RegisterComponent
        ,ForgotpasswordComponent
        ,HomeComponent
        ,Minlength
        ,FaqsChildComponent
    ,FaqsComponent,FooterComponent
    ,InstructorComponent
    ,InstructordetailComponent
    ,AboutusComponent
],
    

     bootstrap:[AppComponent]
})
export class AppModule{
  
 
}

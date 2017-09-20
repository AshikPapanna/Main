import { BrowserModule } from "@angular/platform-browser";
 

import{NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';


     



import {AppComponent} from './app.component';

import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import{RegisterComponent} from './components/register/register.component';

@NgModule({
    imports:[BrowserModule,FormsModule,MdButtonModule, MdCheckboxModule],
declarations:[AppComponent,LoginComponent,ProfileComponent,RegisterComponent],

bootstrap:[AppComponent]
})
export class AppModule{

}

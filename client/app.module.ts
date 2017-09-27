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

const approutes:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    
]



@NgModule({
    imports:[BrowserModule,
        FormsModule,
        MdButtonModule,
         MdCheckboxModule,
         HttpModule,
        RouterModule.forRoot(approutes,{enableTracing:true})],
    declarations:[AppComponent,LoginComponent,ProfileComponent,RegisterComponent,Minlength],

     bootstrap:[AppComponent]
})
export class AppModule{

}

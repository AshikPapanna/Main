import { BrowserModule } from "@angular/platform-browser";
 

import{NgModule} from '@angular/core';

import { FormsModule }   from '@angular/forms';






import {AppComponent} from './app.component';

import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';

@NgModule({
    imports:[BrowserModule,FormsModule],
declarations:[AppComponent,LoginComponent,ProfileComponent],

bootstrap:[AppComponent]
})
export class AppModule{

}

import {BrowserModule} from '@angular/platform-browser'

import{NgModule} from '@angular/core'

import {AppComponent} from './app.component'

//import{LoginComponent} from './components/login/login.component'

@NgModule({
declarations:[AppComponent],
imports:[BrowserModule],
bootstrap:[AppComponent]
})
export class AppModule{

}

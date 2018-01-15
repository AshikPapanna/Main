import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './client/app.module'

setTimeout(()=> {
    platformBrowserDynamic().bootstrapModule(AppModule);
}, 2000); 


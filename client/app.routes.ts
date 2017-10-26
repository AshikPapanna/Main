import { RouterModule,Routes } from '@angular/router';
import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import{RegisterComponent} from './components/register/register.component';
import{HomeComponent} from './components/home/home.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {FaqsComponent} from './components/faqs/faqs.component';
import{FaqsChildComponent} from './components/faqs/child/faqschild.component'






const approutes:Routes=[
    {
     path:'home',
     component:HomeComponent,
     data:{state:'home'}
    },
    {
     path:'home/:name:ifr',
     component:HomeComponent,
     data:{state:'home'}
    },
    {
        path:'login',
        component:LoginComponent,
        data:{state:'login'}
    },
    {
        path:'faqs',
        component:FaqsComponent,
        data:{state:'faqs'}
                    },
                    
    {
        path:'register',
        component:RegisterComponent,
        data:{state:'register'}
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





export const AppRoutes=RouterModule.forRoot(approutes);

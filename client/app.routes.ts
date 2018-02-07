import { RouterModule,Routes } from '@angular/router';
import{LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import{RegisterComponent} from './components/register/register.component';
import{HomeComponent} from './components/home/home.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {FaqsComponent} from './components/faqs/faqs.component';
import{FaqsChildComponent} from './components/faqs/child/faqschild.component'
import{InstructorComponent} from './components/instructors/instructor.component'

import{InstructordetailComponent} from './components/instructors/instructordetail/instructordetail.component'

import{AppComponent} from './app.component'

import{AboutusComponent} from './components/aboutus/aboutus.component';
import{RegistersuccessfullComponent} from './components/registersuccessfull/registersuccessfull.component';







const approutes:Routes=[
    {
     path:'home',
     component:HomeComponent,
     data:{state:'home'}
    },
   {
     path:'home/:name/:ifr',
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
        path:'instructors',
        component:InstructorComponent
            },
     {
        path:'instructors/:id',
        component:InstructorComponent
            },
    {
        path:'profiles/:tokenId',
        component:ProfileComponent
    },
     {
        path:'aboutus',
        component:AboutusComponent
    },
    {
        path:'registersuccessfull',
        component:RegistersuccessfullComponent
    },
      
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'*',
        redirectTo:'/home',
        pathMatch:'full'
    }

]





export const AppRoutes=RouterModule.forRoot(approutes);

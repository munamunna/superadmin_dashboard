import { Routes } from '@angular/router';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { ProductlilstComponent } from './pages/productlilst/productlilst.component';
import { LoginComponent } from './auth/login/login.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'admindashboard',
        component:AdmindashboardComponent
    },
    {
        path:'create-user',
        component:CreateuserComponent
    },
    {
        path:'list-users',
        component:UserlistComponent
    },
    {
        path:'list-product',
        component:ProductlilstComponent
    },
    {
        path:'reset-password',
        component:ResetpasswordComponent
    }
];

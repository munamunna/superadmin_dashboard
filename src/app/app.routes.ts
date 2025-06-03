import { Routes } from '@angular/router';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { ProductlilstComponent } from './pages/productlilst/productlilst.component';
import { LoginComponent } from './auth/login/login.component';

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
        path:'list-product',
        component:ProductlilstComponent
    }
];

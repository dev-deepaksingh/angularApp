import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';


export const router: Routes = [
 {
     path: '',
     component: LoginComponent,
 },
 {
    path: 'signup',
    component: SignupComponent,
},
 {
     path: 'employee',
     canActivate : [AuthGuard],
     component: EmployeeComponent,
 },
 { 
     path: 'employee/editemployee/:employee_id',
     canActivate : [AuthGuard],
     component: EditemployeeComponent,
 },
 { 
    path: 'employee/addemployee',
    canActivate : [AuthGuard],
    component: AddemployeeComponent,
 },
 { 
    path: 'statistics',
    canActivate : [AuthGuard],
    component: StatisticsComponent,
 },
 { 
    path: 'profile',
    canActivate : [AuthGuard],
    component: ProfileComponent,
 },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);
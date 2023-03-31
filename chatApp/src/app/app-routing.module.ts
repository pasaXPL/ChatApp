import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginframeComponent } from './loginframe/loginframe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { GuardGuard } from './Services/guard.guard';
const routes: Routes = [
  {
    path: 'user',
    component: LoginframeComponent,
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent},
      { path: '', redirectTo: '/user/login', pathMatch: 'full' },
      { path: '**', redirectTo:'/user/login', pathMatch: 'full' }
    ]
  },
  {
    path: 'chatapp',
    component: MainframeComponent,
    canActivate: [GuardGuard]
  },
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: '**', redirectTo:'/user/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

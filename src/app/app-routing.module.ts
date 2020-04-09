import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FinderProfileComponent } from './finder-profile/finder-profile.component';
import { SeekerProfileComponent } from './seeker-profile/seeker-profile.component';



const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:  HomeComponent},
  { path: 'Signup', component:  SignupComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Finders', component: FinderProfileComponent, canActivate: [AuthGuard] },
  { path: 'Seekers', component: SeekerProfileComponent, canActivate: [AuthGuard] },

  // { path: '', component: HomeComponent },
  // { 
  //   path: 'profile', 
  //   component: ProfileComponent, 
  //   canActivate: [AuthGuard] 
  // },
  // { 
  //   path: 'admin', 
  //   component: AdminComponent, 
  //   canActivate: [RoleGuard], 
  //   data: { 
  //     expectedRole: 'admin'
  //   } 
  // },
//   { path: '**', redirectTo: '' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { SeekerformComponent } from './seekerform/seekerform.component';
import { FinderformComponent } from './finderform/finderform.component';
import { FinderFeedComponent } from './finder-feed/finder-feed.component'
import { NewsFeedComponent } from './news-feed/news-feed.component'

import { 
  FormsService as FormJump 
} from './forms.service';


const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'Signup', component:  SignupComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'finders', component: FinderProfileComponent, canActivate: [AuthGuard] },
  { path: 'seekers', component: SeekerProfileComponent, canActivate: [AuthGuard] },
  { path: 'seekerform', component: SeekerformComponent},
  { path: 'finderform', component: FinderformComponent},
  { path: 'finderfeed', component: FinderFeedComponent},
  { path: 'newsfeed', component: NewsFeedComponent},


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

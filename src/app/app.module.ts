import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeekerProfileComponent } from './seeker-profile/seeker-profile.component';
import { FinderProfileComponent } from './finder-profile/finder-profile.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FinderFeedComponent } from './finder-feed/finder-feed.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FinderformComponent } from './finderform/finderform.component';
import { SeekerformComponent } from './seekerform/seekerform.component';
import { NavbarComponent } from './navbar/navbar.component'
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FinderService } from './finder.service';
import { FormsService } from './forms.service';
import { NumverifyService } from './numverify.service';
import { SeekerService } from './seeker.service';
import { RoleGuardService } from './role-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
 
@NgModule({
  declarations: [
    AppComponent,
    SeekerProfileComponent,
    FinderProfileComponent,
    NewsFeedComponent,
    FinderFeedComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FinderformComponent,
    SeekerformComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [ AuthGuardService, AuthService, FinderService, FormsService, NumverifyService, SeekerService, RoleGuardService, JwtHelperService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
<<<<<<< HEAD
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

=======
import { FlexLayoutModule } from '@angular/flex-layout';
import { FinderformComponent } from './finderform/finderform.component';
import { SeekerformComponent } from './seekerform/seekerform.component'
 
>>>>>>> 81e8f32045a6d5c2addd43afe518e31b63ca25bd
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
<<<<<<< HEAD
    DialogComponent
=======
    FinderformComponent,
    SeekerformComponent
>>>>>>> 81e8f32045a6d5c2addd43afe518e31b63ca25bd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
<<<<<<< HEAD
    MatDialogModule
=======
    FlexLayoutModule,
    ReactiveFormsModule
>>>>>>> 81e8f32045a6d5c2addd43afe518e31b63ca25bd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

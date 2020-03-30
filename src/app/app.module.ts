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

@NgModule({
  declarations: [
    AppComponent,
    SeekerProfileComponent,
    FinderProfileComponent,
    NewsFeedComponent,
    FinderFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

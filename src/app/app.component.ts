import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title= "flex-nav";
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor (public mediaObserver: MediaObserver) {}
  ngOnInit () {
  this.mediaObserver.media$.subscribe(
    (results:MediaChange) => {
    console.log(results.mqAlias);
  this.deviceXs = results.mqAlias === 'xs' ? true:false;
    }
  )}
  ngOnDestroy () {
  this.mediaSub.unsubscribe()
  }

}
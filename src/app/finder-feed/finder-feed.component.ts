import { Component, OnInit } from '@angular/core';
import { SeekerService } from '../seeker.service';

@Component({
  selector: 'app-finder-feed',
  templateUrl: './finder-feed.component.html',
  styleUrls: ['./finder-feed.component.css']
})
export class FinderFeedComponent implements OnInit {
  profiles: any
  user: any

  constructor(private seekerFetch:SeekerService) { }

  ngOnInit(): void {
    this.getProfiles()
  }

  getProfiles() {
    this.seekerFetch.getSeeker().subscribe((data) => {
      this.profiles = data
    })
  }

}

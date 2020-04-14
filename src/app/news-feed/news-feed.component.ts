import { Component, OnInit } from '@angular/core';
import { FinderService } from '../finder.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  profiles: any
  user: any

  constructor(private finderFetch:FinderService) { }

  ngOnInit(): void {
    this.getProfiles()
  }

  //get all finder profiles to display
  getProfiles() {
    this.finderFetch.getFinder().subscribe((data) => {
      this.profiles = data
    })
  }

  

}

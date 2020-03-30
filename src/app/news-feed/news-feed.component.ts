import { Component, OnInit } from '@angular/core';
import { FinderService } from '../finder.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  profiles: any

  constructor(private finderFetch:FinderService) { }

  ngOnInit(): void {
    this.getProfiles()
  }

  getProfiles() {
    this.finderFetch.getFinder().subscribe((data) => {
      this.profiles = data
    })
  }

}

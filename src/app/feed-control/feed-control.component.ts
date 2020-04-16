import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-control',
  templateUrl: './feed-control.component.html',
  styleUrls: ['./feed-control.component.css']
})
export class FeedControlComponent implements OnInit {

  profiletype: string
  constructor() { 
    this.profiletype=localStorage.getItem("profiletype")
  }

  ngOnInit(): void {
  }

}

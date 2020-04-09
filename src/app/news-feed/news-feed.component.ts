import { Component, OnInit } from '@angular/core';
import { FinderService } from '../finder.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  profiles = []
  users: any

  constructor(public finderFetch:FinderService ) { this.getProfiles() }
  // public dialogref: MatDialog
  ngOnInit(): void {
    
    // this.finderFetch.getAllProfiles()
  }

  getProfiles() {
    this.finderFetch.getFinder().subscribe((data) => {
      this.profiles = data
    })
  }

  // viewProfile(userid): void {
  //   this.finderFetch.getFinderProfile(userid).subscribe((data) => {
  //     this.profiles = data;
  //     this.finderFetch.getProfile(userid).subscribe((profId) => {
  //       this.users = profId;
  //     if(this.profiles.length > 0) {
  //       const dialogRef = this.dialog.open(DialogComponent)}
  //   })
  //   })
  // }

}

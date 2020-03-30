import { Component, OnInit } from '@angular/core';
//import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-finder-profile',
  templateUrl: './finder-profile.component.html',
  styleUrls: ['./finder-profile.component.css']
})
export class FinderProfileComponent implements OnInit {
  finderProfile = 'finderProfile';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
//import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  seekerProfile = 'seekerProfile';
  constructor() { }

  ngOnInit(): void {
  }

}
//where to put the MatCardModule within this componenet, in constructor or ngOnIt??
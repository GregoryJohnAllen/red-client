import { Component, OnInit } from '@angular/core';
import { SeekerService } from '../seeker.service';


@Component({
  selector: 'app-finder-profile',
  templateUrl: './finder-profile.component.html',
  styleUrls: ['./finder-profile.component.css']
})
export class FinderProfileComponent implements OnInit {
  profile={userid:""}
  user={fname:"",lname:"", userid:""}
  constructor(private seekerFetch:SeekerService) { }

  ngOnInit(): void {

  this.showMyProfile()

  }

  showMyProfile() {
this.seekerFetch.getMyFinder().subscribe((formdata)=>{
  console.log(formdata)
  this.seekerFetch.getMyUser(formdata.userid).subscribe((formdata)=>{
    console.log(formdata)
    this.user=formdata
  })
  this.profile=formdata
});
  }


  }

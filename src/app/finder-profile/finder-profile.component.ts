import { Component, OnInit } from '@angular/core';
import { SeekerService } from '../seeker.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finder-profile',
  templateUrl: './finder-profile.component.html',
  styleUrls: ['./finder-profile.component.css']
})
export class FinderProfileComponent implements OnInit {
  profile={userid:""}
  user={fname:"",lname:"", userid:""}
  usertype=localStorage.getItem("profiletype")
  constructor(private seekerFetch:SeekerService, private router: Router) { }

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
  updateInfo(){
    if (this.usertype=="admin"){
      return
    }
    let url = this.usertype=="seeker" ? "/finderform" : "/seekerform"
    this.router.navigateByUrl(url)
  }


  }

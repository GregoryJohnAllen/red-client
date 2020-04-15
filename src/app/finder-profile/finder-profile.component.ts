import { Component, OnInit } from '@angular/core';
import { SeekerService } from '../seeker.service';


@Component({
  selector: 'app-finder-profile',
  templateUrl: './finder-profile.component.html',
  styleUrls: ['./finder-profile.component.css']
})
export class FinderProfileComponent implements OnInit {
  profile:any
  user:any
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

  // feed(){
  //   let formData = {
  //   user: {
  //   fname: this.fname,
  //   lname: this.lname,
  //   phone: this.phone,
  //   email: this.email,
  //   password: this.password,
  //   profiletype: this.profiletype
  //   }
  //   };

  //   this.http
  //   .post<any>("http://localhost:3000/user/createuser", formData)
  //   .subscribe(
  //     res => {
  //     console.log(res);
  //     console.log('this is the response: '+ res + res.sessionToken + res.profileType);
  //     localStorage.setItem("token", res.sessionToken);
  //     localStorage.setItem("profiletype", res.profileType) 
  //     this.router.navigateByUrl(`/${res.profileType}form`)
  //   },
  //     err=> console.log(err)
  //   );
    // }

  }

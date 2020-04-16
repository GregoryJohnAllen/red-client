import { Component, OnInit } from '@angular/core';
//import { MatCardModule } from '@angular/material/card'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { APIURL } from '../../environments/environment.prod'
import { Router } from '@angular/router';
import { FinderService } from '../finder.service'


@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
email:string
password:string
user:any
profile:any
usertype=localStorage.getItem("profiletype")
image
constructor(private http: HttpClient, private router:Router, private finderFetch: FinderService)
{}
  ngOnInit(): void {

    this.showMyProfile()

  }

  selectImage(event){
    if(event.target.files.length>0){
    this.image=event.target.files[0]
    console.log(this.image)
    }
    }

    onSubmit(){
    let formData = new FormData
    formData.append("file", this.image)

    const reqHeaders=new HttpHeaders({Authorization: localStorage.getItem("token")
    });

    this.http.post<any>(`${APIURL}/seeker/create`, formData, {headers:reqHeaders}).subscribe(
      res => console.log(res),
      err=> console.log(err)
  );
}

showMyProfile() {
  this.finderFetch.getMySeeker().subscribe((formdata)=>{
    console.log(formdata)
    this.finderFetch.getMyUser(formdata.userid).subscribe((formdata)=>{
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
      let url = this.usertype=="seeker" ? "/seekerform" : "/finderform"
      this.router.navigateByUrl(url)
    }
  
    feed(){
      this.router.navigateByUrl(`/finderfeed`)
  
       };

}
//where to put the MatCardModule within this componenet, in constructor or ngOnIt??
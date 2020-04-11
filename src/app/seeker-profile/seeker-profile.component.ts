import { Component, OnInit } from '@angular/core';
//import { MatCardModule } from '@angular/material/card'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { APIURL } from '../../environments/environment.prod'

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  seekerProfile = 'seekerProfile';
  email:string
password:string
image
constructor(private http: HttpClient)
{}
  ngOnInit(): void {
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

}
//where to put the MatCardModule within this componenet, in constructor or ngOnIt??
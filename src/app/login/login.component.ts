import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email:string
password:string
image
constructor(private http: HttpClient)
{ }

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

    this.http.post<any>("http://localhost:3000/finder/create", formData, {headers:reqHeaders}).subscribe(
      res => console.log(res),
      err=> console.log(err)
  );
}
  

    login(){
    let formData = {
    user: {
    email: this.email,
    password: this.password
    }
    };

    this.http
    .post<any>("http://localhost:3000/user/login", formData)
    .subscribe(
      res => {
      console.log(res);
      localStorage.setItem("token", res.sessionToken);
      localStorage.setItem("profileType", "") //need to insert value
      },
      err=> console.log(err)
    );
    }
  }

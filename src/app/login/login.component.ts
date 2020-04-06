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

  ngOnInit(): void {}

  
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

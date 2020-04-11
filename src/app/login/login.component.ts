import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { APIURL } from '../../environments/environment.prod'


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
    .post<any>(`${APIURL}/user/login`, formData)
    .subscribe(
      res => {
      console.log(res);
      localStorage.setItem("token", res.sessionToken);
      localStorage.setItem("profileType", "") //need to insert value
      },
      err=> alert ("Incorrect username or password.")

      // err=> console.log(err)
    );
    }



  }

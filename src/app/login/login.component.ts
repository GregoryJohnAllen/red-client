import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email:string
password:string
profiletype:string
image
constructor(private http: HttpClient, private router:Router)
{ }

  ngOnInit(): void {}

  
    login(){
    let formData = {
    user: {
      email: this.email,
      password: this.password,
      profiletype: this.profiletype
    }
    };

    this.http
    .post<any>("http://localhost:3000/user/login", formData)
    .subscribe(
      res => {
        console.log(res);
        console.log('this is the response: ' + res.user.profiletype);
        localStorage.setItem("token", res.sessionToken);
        localStorage.setItem("profiletype", res.user.profiletype)
        this.router.navigateByUrl(`/${res.user.profiletype}s`)
      },
      err=> alert ("Incorrect username or password.")

      // err=> console.log(err)
    );
    }
  }

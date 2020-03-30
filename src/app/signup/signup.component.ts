import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumverifyService } from '../numverify.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fname:string
  lname:string
  phone:string
  email:string 
  password:string
  constructor(private numverify: NumverifyService , private http: HttpClient)

  { }

  ngOnInit(): void {
  }

  
  signup(){
    let formData = {
    user: {
    fname: this.fname,
    lname: this.lname,
    phone: this.phone,
    email: this.email,
    password: this.password
    }
    };

    this.http
    .post<any>("http://localhost:3000/user/createuser", formData)
    .subscribe(
      res => {
      console.log(res);
      localStorage.setItem("token", res.sessionToken);
      localStorage.setItem("profileType", "") //need to insert value
      },
      err=> console.log(err)
    );
    }

    verifynum() {
      this.numverify.verifynum(this.phone).subscribe(
        res => {
          console.log(res)
        }
      )
    }

}

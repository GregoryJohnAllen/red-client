import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumverifyService } from '../numverify.service'
import { MatSnackBar } from '@angular/material/snack-bar';

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
  valid:boolean

  constructor(private numverify: NumverifyService , private http: HttpClient, private snackbar: MatSnackBar )

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
    // profileType: this.profileType
    }
    };

    this.http
    .post<any>("http://localhost:3000/user/createuser", formData)
    .subscribe(
      res => {
      console.log(res);
      localStorage.setItem("token", res.sessionToken);
      localStorage.setItem("profileType", res.profileType) //need to insert value
      },
      err=> console.log(err)
    );
    }

    verifynum() {
      this.numverify.verifynum(this.phone).subscribe(
        res => {
          console.log(res)
          //  res = this.phone
          if (res.valid === true) {
           this.signup()
          } else {
            return alert ("Please provide a valid phone number.")
            // this.snackbar.open("Please provide a valid phone number.")
          }
        }
      )
    }

}

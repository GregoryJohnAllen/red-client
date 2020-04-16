import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  constructor(private http: HttpClient) { }
  requestHeaders = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')})
  //get all user profiles
  getAllProfiles() {
    return this.http.get(`http://localhost:3000/user/getall`)
  }
  //get the user profile of yourself
  getMyUser(userid):any {
    return this.http.get(`http://localhost:3000/user/getmyprofile/${userid}`)
  }

  //get all for Seeker Profiles for news feed
  getSeeker() {
    return this.http.get("http://localhost:3000/finder/", {headers: this.requestHeaders})
  }
  //get specific Seeker profile that you want to view
  getSeekerProfile() {
    return this.http.get(`http://localhost:3000/finder/getprofile`, {headers: this.requestHeaders})
  }
  getMyFinder():any {
    return this.http.get(`http://localhost:3000/seeker/getprofile`, {headers: this.requestHeaders})
  }
  //update by id for the finder profile that you are logged into
  updateFinder(formdata) {
    let body = {finder: {
    diskrank: formdata.diskrank,
    employtype: formdata.employtype,
    about: formdata.about,
    skills: formdata.skills,
    salary: formdata.salary,
    projects: formdata.projects
    }}
    
    return this.http.put(`http://localhost:3000/finder/update/`, body , {headers: this.requestHeaders})         
  }
}

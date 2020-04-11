import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  constructor(private http: HttpClient) { }
  //get all user profiles
  getAllProfiles() {
    return this.http.get(`http://localhost:3000/user/getall`)
  }
  //get the user profile of yourself
  getMyUser(userid) {
    return this.http.get(`http://localhost:3000/user/${userid}`)
  }

  //get all for Seeker Profiles for news feed
  getSeeker() {
    return this.http.get("http://localhost:3000/finder/")
  }
  //get specific Seeker profile that you want to view
  getSeekerProfile(userid) {
    return this.http.get(`http://localhost:3000/finder/${userid}`)
  }
  getMyFinder(userid) {
    return this.http.get(`http://localhost:3000/seeker/${userid}`)
  }
  //update by id for the finder profile that you are logged into
  updateFinder(userid) {
    return this.http.get(`http://localhost:3000/finder/update/${userid}`)         
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }
  //get all user profiles
  getAllProfiles() {
    return this.http.get(`http://localhost:3000/user/getall`)
  }
  getMyUser(userid) {
    return this.http.get(`http://localhost:3000/user/${userid}`)
  }
  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get("http://localhost:3000/seeker/")
  }
  //get specific Finder profile that you want to view
  getFinderProfile(userid) {
    return this.http.get(`http://localhost:3000/seeker/${userid}`)
  }
  getMySeeker(userid) {
    return this.http.get(`http://localhost:3000/finder/${userid}`)
  }
  //update by id for the seeker profile that you are logged into
  updateSeeker(userid) {
    return this.http.get(`http://localhost:3000/seeker/update/${userid}`)         
  }
}

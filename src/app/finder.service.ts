import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }
  requestHeaders = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')})
  //get all user profiles
  getAllProfiles() {
    return this.http.get(`http://localhost:3000/user/getall`)
  }
  getMyUser(userid) {
    return this.http.get(`http://localhost:3000/user/${userid}`)
  }
  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get("http://localhost:3000/seeker/", {headers: this.requestHeaders})
  }
  //get specific Finder profile that you want to view
  getFinderProfile() {
    return this.http.get(`http://localhost:3000/seeker/getprofile`, {headers: this.requestHeaders})
  }
  getMySeeker() {
    return this.http.get(`http://localhost:3000/finder/getprofile`, {headers: this.requestHeaders})
  }
  //update by id for the seeker profile that you are logged into
  updateSeeker() {
    return this.http.get(`http://localhost:3000/seeker/update/`, {headers: this.requestHeaders})         
  }
}

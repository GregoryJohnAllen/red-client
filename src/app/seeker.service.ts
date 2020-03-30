import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeekerService {

  constructor(private http: HttpClient) { }

  //get all for Seeker Profiles for news feed
  getSeeker() {
    return this.http.get("http://localhost:3000/finder/")
  }
  //get specific Seeker profile that you want to view
  getSeekerProfile() {
    return this.http.get("http://localhost:3000/finder/:id")
  }
  //update by id for the finder profile that you are logged into
  updateFinder() {
    return this.http.get("http://localhost:3000/finder/update/:id")         
  }
}

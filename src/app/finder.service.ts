import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }

  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get("http://localhost:3000/seeker/")
  }
  //get specific Finder profile that you want to view
  getFinderProfile() {
    return this.http.get("http://localhost:3000/seeker/:id")
  }
  //update by id for the seeker profile that you are logged into
  updateSeeker() {
    return this.http.get("http://localhost:3000/seeker/update/:id")         
  }
}

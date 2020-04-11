import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }

  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get(`${APIURL}/seeker/`)
  }
  //get specific Finder profile that you want to view
  getFinderProfile() {
    return this.http.get(`${APIURL}/seeker/:id`)
  }
  //update by id for the seeker profile that you are logged into
  updateSeeker() {
    return this.http.get(`${APIURL}/seeker/update/:id`)         
  }
}

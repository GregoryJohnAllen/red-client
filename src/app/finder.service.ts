import { Injectable } from '@angular/core';
import { APIURL } from '../environments/environment.prod'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }
  requestHeaders = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')})
  //get all user profiles
  getAllProfiles() {
    return this.http.get(`${APIURL}/user/getall`)
  }
  getMyUser(userid):any {
    return this.http.get(`${APIURL}/user/getmyprofile/${userid}`)
  }
  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get(`${APIURL}/seeker/`, {headers: this.requestHeaders})
  }
  //get specific Finder profile that you want to view
  getFinderProfile() {
    return this.http.get(`${APIURL}/seeker/getprofile`, {headers: this.requestHeaders})
  }
  getMySeeker() :any {
    return this.http.get(`${APIURL}/finder/getprofile`, {headers: this.requestHeaders})
  }
  //update by id for the seeker profile that you are logged into
  updateSeeker(formdata) {
    let body ={seeker: {
      predisktraits:formdata.predisktraits,
      prevjobs:formdata.prevjobs,
      prefskills:formdata.prefskills,
      companies:formdata.companies
    }
      
    }
    return this.http.put(`${APIURL}/seeker/update/`, body ,{headers: this.requestHeaders})         
  }
}

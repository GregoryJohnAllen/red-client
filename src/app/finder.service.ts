import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  constructor(private http: HttpClient) { }
  requestHeaders = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')})
  //get all for Finder Profiles for news feed
  getFinder() {
    return this.http.get("http://localhost:3000/seeker/")
  }
  //get specific Finder profile that you want to view
  getFinderProfile() {
    return this.http.get("http://localhost:3000/seeker/:id")
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
    return this.http.put(`http://localhost:3000/seeker/update/`, body ,{headers: this.requestHeaders})         
  }
}

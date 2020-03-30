import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NumverifyService {
  
  private access_key:string = '83456eac8e2d66d0b37937d873c46732';
  private _url:string = 'http://apilayer.net/api/validate?access_key=' + `${this.access_key}` + '&number='

  constructor(private http:HttpClient) { }
  verifynum(phone:string){
    return this.http.get(this._url+`${phone}`)
  }

}

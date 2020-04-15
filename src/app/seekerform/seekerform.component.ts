import { Component, OnInit } from '@angular/core';
import { FinderService } from '../finder.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-seekerform',
  templateUrl: './seekerform.component.html',
  styleUrls: ['./seekerform.component.css']
})
export class SeekerformComponent implements OnInit {
  //Initialize Fields
  // name : string
  predisktraits: string
  prevjobs: string
  prefskills:string
  companies: string



  constructor(private finderFetch:FinderService) {
    this.updateSeeker()
   }

   // create function to get all info from the one profile
   getProfileData(){
    //  if(value = null)
    //  .then
   }

   //inside function if something comes back wiht a null - redefined that var to empty string


   updateSeeker(){
     let formData = {
       predisktraits: this.predisktraits, 
       prevjobs:this.prevjobs,
       prefskills:this.prefskills,
       companies:this.companies
     }
     this.finderFetch.updateSeeker(formData).subscribe(response => {
       console.log(response)
     })
   }
  ngOnInit(): void {
  }

}

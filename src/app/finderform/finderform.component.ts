import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeekerService } from '../seeker.service';

@Component({
  selector: 'app-finderform',
  templateUrl: './finderform.component.html',
  styleUrls: ['./finderform.component.css']
})
export class FinderformComponent implements OnInit {

    diskrank: string
    employtype = ""
    about: string
    skills: string
    salary: number
    projects: string
    fulltime: boolean = false
    parttime: boolean = false
    contract: boolean = false
    temp: boolean = false

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor(private seekerFetch:SeekerService, private router:Router) {
this.populatefields()
   }

   populatefields(){
     this.seekerFetch.getMyFinder().subscribe(data => {
       console.log(data)
      this.diskrank = data.diskrank
      // this.employtype = 
      this.about = data.about
      this.skills = data.skills
      this.salary = data.salary
      this.projects = data.projects
      })
   }

  updateFinder(){
    if(this.fulltime){
      this.employtype = "fulltime"
    }
    if(this.parttime){
      this.employtype = this.employtype+"parttime"
    }
    if(this.contract){
      this.employtype = this.employtype+"contact"
    }
    if(this.temp){
      this.employtype = this.employtype+"temp"
    }

    let formData = {
    diskrank: this.diskrank,
    employtype: this.employtype,
    about: this.about,
    skills: this.skills,
    salary: this.salary,
    projects: this.projects

    }
    this.seekerFetch.updateFinder(formData).subscribe(response => {
      console.log(response);
    })
    console.log(formData)
  }
  goToProfile(){
   this.router.navigateByUrl(`/finders`)
  }

  ngOnInit(): void {
  }

}


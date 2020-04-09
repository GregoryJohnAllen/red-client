import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finderform',
  templateUrl: './finderform.component.html',
  styleUrls: ['./finderform.component.css']
})
export class FinderformComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

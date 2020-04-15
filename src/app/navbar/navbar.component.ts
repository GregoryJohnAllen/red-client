import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input() deviceXs:boolean

constructor(public authservice:AuthService) {}

}

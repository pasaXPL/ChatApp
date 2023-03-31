import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent {
  name:any = "YOUR NAME"
  constructor(private authService: AuthService) {}

  ngOnInit(){
    const val = this.authService.getToken();
    this.name = val
  }

  logoutNow(){
    this.authService.logout();
  }
}

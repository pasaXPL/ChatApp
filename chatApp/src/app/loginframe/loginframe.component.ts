import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginframe',
  templateUrl: './loginframe.component.html',
  styleUrls: ['./loginframe.component.scss']
})
export class LoginframeComponent {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/chatapp']);
    }
  }
}

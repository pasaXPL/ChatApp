import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(): void{
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/chatapp']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}

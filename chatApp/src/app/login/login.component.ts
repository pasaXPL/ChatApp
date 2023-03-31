import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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


  // getAllValuesInDocument(documentId: string): Observable<any> {
  //   return this.firestore
  //     .collection('users')
  //     .doc(documentId)
  //     .valueChanges();
  // }

  onSubmit(): void{
    // this.getAllValuesInDocument('/users/E7P3FQudOkc0OVqvUy7e').subscribe((data) => {
    //   console.log(data);
    // });

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

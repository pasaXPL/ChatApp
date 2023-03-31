import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

interface StorageItem {
  value: string;
  expires: number;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) { }

  setToken(value: string, expires: Date) : void {
    const item: StorageItem = {
      value: value,
      expires: expires.getTime()
    }

    localStorage.setItem('pasaKey', JSON.stringify(item));
  }

  getToken(): string | null {
    const key = localStorage.getItem('pasaKey');

    if(key){
      const item: StorageItem = JSON.parse(key);
      const expires = new Date(item.expires);
        if (expires < new Date()) {
          localStorage.removeItem('xpltoken');
          return null;
        }
        return item.value;
    }
    return null;
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('pasaKey');
    this.router.navigate(['user/login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'testingpaul' && password === 'testingpaul') {
      const expires = new Date();
      expires.setDate(expires.getDate() + 1);
      this.setToken('John Paul', expires);
      return of({ name: 'wow', email: 'wow' });
    }
    return throwError(new Error('Failed to login'));
  }
}

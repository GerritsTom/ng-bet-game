import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './model/user';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Email } from './model/email';
import { ResetData } from './model/resetdata';

@Injectable()
export class DataService {
  loading: boolean;
  signedIn: boolean = false;

  constructor(private http: Http) {
    this.loading = false;
  }

  logIn(user: User) {
    this.signedIn = true;
    return this.http.post('https://bet-game-dataservice.herokuapp.com/users/login', user);
    //return this.http.post('http://localhost:3000/users/login', user);
  }

  register(user: User) {
    return this.http.post('https://bet-game-dataservice.herokuapp.com/users/login', user);
    //return this.http.post('http://localhost:3000/users/signup', user);
  }

  forgotPassword(email: Email) {
    return this.http.post('https://bet-game-dataservice.herokuapp.com/users/forgot', email);
    //return this.http.post('http://localhost:3000/users/forgot', email);
  }

  resetPassword(resetData: ResetData) {
    return this.http.post('https://bet-game-dataservice.herokuapp.com/users/reset', resetData);
    //return this.http.post('http://localhost:3000/users/reset', resetData);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut() {
    return localStorage.removeItem('currentUser');
  }
}

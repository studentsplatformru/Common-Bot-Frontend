import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private _registerUrl = this.baseUrl + '/register';
  private _loginUrl = this.baseUrl + '/login';
  constructor(private http: HttpClient, private _router: Router) {}

  // sends user registration infomation from registration component template to the server
  registerUser(user) {
    return this.http.post<any>(
      'http://ec2-alb-170574020.eu-central-1.elb.amazonaws.com:8080/api/v1/register',
      user
    );
  }

  // sends user login information to the server
  loginUser(user) {
    return this.http.post<any>(
      'http://ec2-alb-170574020.eu-central-1.elb.amazonaws.com:8080/api/v1/login',
      user
    );
  }

  // returns boolean value if user is logged in or not
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // redirects user to login page? when logout button pressed
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  // receives token and stores it in local storage
  getToken() {
    return localStorage.getItem('token');
  }
}

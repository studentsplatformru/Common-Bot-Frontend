import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  onLoginSubmit(): void {
    this.http
      .post(
        'http://ec2-alb-170574020.eu-central-1.elb.amazonaws.com:8080/api/v1/auth/login',
        this.user
      )
      .subscribe(
        (resp) => console.log(resp),
        (error) => console.log(error)
      );
  }
}

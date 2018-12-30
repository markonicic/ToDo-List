import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkUser: FormGroup;
  user: string;
  pass: string;

  constructor(private log: LoginService, private router: Router) { }

  ngOnInit() {
    this.checkUser = new FormGroup({
      loginUser: new FormControl(null, Validators.email),
      loginPass: new FormControl(null, Validators.required)
    });
  }

  // loging user by picking up values from input
  login() {
    this.user = this.checkUser.get('loginUser').value;
    this.pass = this.checkUser.get('loginPass').value;
    console.log('user', this.user);
    console.log('pass', this.pass);
    this.log.login(this.user, this.pass).subscribe(res => {
      if (res.token) {
        this.router.navigate(['/todos']);
      }
    });
  }

}

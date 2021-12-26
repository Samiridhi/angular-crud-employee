import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''
  invalidLogin = false

  msg:string;
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.msg = 'Please Provide Correct Credentials !!';
        this.username=''
        this.password=''
      }
    )
    );

  }
  // checkLogin() {
  //   if (this.loginservice.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate([''])
  //     this.invalidLogin = false
      
  //   } else
  //     this.invalidLogin = true
  //     this.msg = 'Please Provide Correct Credentials !!';
  //     this.username=''
  //     this.password=''
  //     // alert()
  // }

}

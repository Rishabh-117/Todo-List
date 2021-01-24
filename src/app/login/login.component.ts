import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = ''
  password = ""
  errorMessage = 'invalidCredentials'
  invalidLogin = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basic: BasicAuthenticationService) { }



  ngOnInit(): void {
  }
  // handleLogin() {
  //   // console.log(this.username)
  //   //if(this.username==='lakshay' && this.password==='dummy')
  //   if (this.hardcodedAuthenticationService.authentication(this.username, this.password)) {
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false

  //   } else {
  //     this.invalidLogin = true
  //   }

  // }
//   basichandleLogin() {
//     // console.log(this.username)
//     //if(this.username==='lakshay' && this.password==='dummy')
//        this.basic.executeAuthService(this.username, this.password).subscribe(
//       data => {
//         this.router.navigate(['welcome', this.username])
//         this.invalidLogin = false

//       },
//       error => {
//         this.invalidLogin = true
//       }
//     )
// }
basicJWThandleLogin() {
  // console.log(this.username)
  //if(this.username==='lakshay' && this.password==='dummy')
     this.basic.executeJWTAuthService(this.username, this.password).subscribe(
    data => {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false

    },
    error => {
      this.invalidLogin = true
    }
  )
}
}





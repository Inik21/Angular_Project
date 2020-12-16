import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/interfaces/login';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UsersServiceService, public router: Router) { }

  ngOnInit(): void {
  }
  
  loginHandler(data: ILoginData) {
    this.userService.login(data).subscribe(
      () => { this.router.navigate(['home']) },
      err => { console.log(err) }
    )
  }

}

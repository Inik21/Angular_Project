import { Component, OnInit } from '@angular/core';
import { IRegisterData } from 'src/app/interfaces/register';
import { UsersServiceService } from '../users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  catchedError: string = '';

  constructor(public userService: UsersServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  registerHandler(data: IRegisterData) {

    this.userService.register(data).subscribe(
      () => { this.router.navigate(['user/login']) },
      err => {this.catchedError = err.error.message}
    );
  }
}

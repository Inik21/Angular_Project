import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/user/users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get user() {
    return this.userService.user;
  }

  constructor(public userService: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.userService.logout().subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    )
  }

}

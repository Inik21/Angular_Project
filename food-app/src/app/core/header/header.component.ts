import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/user/users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.userService.logout().subscribe(
      () => this.router.navigate(['/user/login']),
      err => console.log(err)
    )
  }

}

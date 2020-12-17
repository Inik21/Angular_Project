import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user;

  userEmail;

  constructor(public usersService: UsersServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ email }) => this.userEmail = email);
  }

  changePasswordHandler(data: any) {
    console.log(this.userEmail);
    this.usersService.getUserFromEmail(this.userEmail,data).subscribe(user => this.router.navigate(['']),err => console.log(err));
  }

}

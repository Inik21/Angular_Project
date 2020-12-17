import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get user() {
    return this.usersService.user;
  }

  constructor(public usersService: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  editUserHandler(data: any) {
    this.usersService.editUser(data).subscribe(
      () => this.router.navigate(['/user/profile']),
      err => console.log(err)
    );
  }

}

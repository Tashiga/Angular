import { Component } from '@angular/core';
import { User } from '../@shared/models/user';
import { USERS } from './user.mock';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userlist: User[] = USERS;
}

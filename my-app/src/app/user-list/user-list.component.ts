import { Component, OnInit } from '@angular/core';
import { User } from '../@shared/models/user';
import { USERS } from './user.mock';
import { UserService } from './user-service/UserService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: User[] = USERS;

  constructor(private _userService: UserService){

}

ngOnInit(): void {
  this._userService.getUsers()
  .subscribe(data => {
    this.userlist = data;
    console.log("get : ", data);
  });
}

  addItem(newItem: User){
    let id: number = 0;
    this._userService.getUsers().subscribe(data => {
      id = data.length+1;
    });
    newItem.id = id;
    this.userlist.push(newItem);
    this._userService.saveUser(newItem).subscribe(data => {
      console.log("add : ", data);
    });
    this._userService.getUsers()
    .subscribe(data => {
      console.log("get : ", data);
    });
  }

  deleteUser(id: number){
    console.log("user : ", id);
    this._userService.deleteUser(id).subscribe(data => {
      console.log("user deleted !");
    })
  }
}

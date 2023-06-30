import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@shared/models/user';
import { USERS } from '../user.mock';
import { UserService } from '../user-service/UserService';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent{

  /*
  @Input('user') 
    _user !: User;
  @Input() set user(user: User){
    if(user != null)
    this._user = user;
  }
*/

  id: number;
  userlist: User[] = USERS;
  user: User | undefined;

  updateView: boolean = false;

  constructor(private route : ActivatedRoute,
              private _userService: UserService) {
    this.id = this.route.snapshot.params['ID'];
  }

  ngOnInit() {
    this.updateUserFromID();
  }

  updateUserFromID(){
    if(this.id != null || this.id != undefined){
      console.log("id : ", this.id);
      this._userService.getUser(this.id).subscribe(data => {
        console.log("data : ", data);
        let newUser: User = {
          id: data.id,
          username: data.username,
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
          avatar:data.avatar
        };
        this.user = newUser;
      });
    }
  }

  changeView(){
    this.updateView = !this.updateView;
  }

}

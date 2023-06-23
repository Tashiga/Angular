import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@shared/models/user';
import { USERS } from '../user.mock';

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

  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['ID'];
  }

  ngOnInit() {
    this.updateUserFromID();
  }

  updateUserFromID(){
    if(this.id != null || this.id != undefined){
      this.userlist.forEach(user=>{
        if(user.id==this.id){
          this.user= user;
        }
      });
    }
  }

}

import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { USERS } from '../user-list/user.mock';
import { Output, EventEmitter } from '@angular/core';
import { User } from '../@shared/models/user';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm = new FormGroup({
    username : new FormControl(),
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    //avatar : new FormControl()
  });

  image: string = "";
  formType: string = "create";
  formTypes: string[] = ["create", "update"];
  
  @Output() newItemEvent = new EventEmitter<User>();

  constructor(private toast : NgToastService){

  }

  submitUser() {
    let user: User = {
      username: this.userForm.value.username,
      lastname: this.userForm.value.lastname,
      firstname: this.userForm.value.firstname,
      email: this.userForm.value.email,
      id: USERS.length+1,
      avatar:""
    };
    this.newItemEvent.emit(user);
    this.toast.success({detail: 'Sucess Message', summary: 'User created sucessfully', duration: 3000});
  }
  
  addUser(){
    console.log("Hello\nyou tried to save a ne user.");
  }

}

import { Component, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
  
  @Output() newItemEvent = new EventEmitter<User>();

  constructor(private toast : NgToastService){

  }

  submitUser() {
    console.log(this.userForm.value);
    let user: User = {
      username: this.userForm.value.username,
      lastname: this.userForm.value.lastname,
      firstname: this.userForm.value.firstname,
      email: this.userForm.value.email,
      id: USERS.length,
      avatar:""
    };
    this.newItemEvent.emit(user);
    this.toast.success({detail: 'Sucess Message', summary: 'User created sucessfully', duration: 3000});
    //USERS.push(user);
  }
  
  addUser(){
    console.log("Hello\nyou tried to save a ne user.");
  }

}

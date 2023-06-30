import { Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { USERS } from '../user-list/user.mock';
import { Output, EventEmitter } from '@angular/core';
import { User } from '../@shared/models/user';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../user-list/user-service/UserService';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  userForm = new FormGroup({
    username : new FormControl(),
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    //avatar : new FormControl()
  });

  updateUserName: string = '';
  updateFirstName: string = '';
  updateEmail: string = '';
  updateLastName: string = '';

  image: string = "";

  //for edit
  _formType: string = "create";

  @Input('formType') 
  set formType(formType:string){
    if (formType)
      this._formType = formType;
  }

  //for edit
  _id: number = 0;

  @Input('id') 
  set id(id:number){
    if (id){
      this._id = id;
      this.displayForm = true;
    }
  }
  
  formTypes: string[] = ["create", "update"];//just for see all form type options
  displayForm: boolean = false;
  
  @Output() newItemEvent = new EventEmitter<User>();

  constructor(private toast : NgToastService,
    private _userService: UserService){

  }
  ngOnInit(): void {
    if(this._formType==='update')
      this.loadForm();
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

  display(){
    this.displayForm = !this.displayForm;
  }

  loadForm() {
    this._userService.getUser(this._id).subscribe(data =>{
      this.updateUserName = data.username;
      this.updateFirstName  = data.firstname;
      this.updateLastName = data.lastname;
      this.updateEmail = data.email;
      if(data.avatar)
        this.image = data.avatar;
      console.log("username : ", this.updateUserName);
    });
  }

  updateUser(){
      let newuser: User = {
        id: this._id,
        username: this.updateUserName,
        firstname: this.updateFirstName,
        lastname: this.updateLastName,
        email : this.updateEmail,
        avatar: this.image
      };
      console.log("user : ", newuser);
      this._userService.updateUser(newuser).subscribe(data => {
        console.log("updated : ", data);
      })
  }

}

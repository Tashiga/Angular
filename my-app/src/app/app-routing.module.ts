import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRowComponent } from './user-list/user-row/user-row.component';

const routes: Routes = [
  {
    path : 'user-details',
    component: UserDetailsComponent
  },
  {
    path : 'user-list',
    component : UserListComponent
  },
  {
    path : 'user-row/:ID',
    component : UserRowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

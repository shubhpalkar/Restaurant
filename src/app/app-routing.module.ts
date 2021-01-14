//import { Component, NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {RegisterComponent} from './register/register.component';
import {UpdateDetailComponent} from './update-detail/update-detail.component';
import {ListRestoComponent} from './list-resto/list-resto.component'
import { from } from 'rxjs';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
{ 
  component: AddRestoComponent, path: 'Add'
},
{ 
  component: UpdateDetailComponent, path: 'Update/:id'
},
{ 
  component: RegisterComponent, path: 'Register'
},
{ 
  component: LoginUserComponent, path: 'Login'
},
{ 
  component: ListRestoComponent, path: 'List'
},
{
  component: DashbordComponent, path: '**'
},
{
  component: DashbordComponent, path: ''
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


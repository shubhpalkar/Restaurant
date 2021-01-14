import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
  AppComponent,
    RegisterComponent,
    UpdateDetailComponent,
    LoginUserComponent,
    AddRestoComponent,
    ListRestoComponent,
    HeaderComponent,
    DashbordComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

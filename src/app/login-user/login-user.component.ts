import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private resto:RestoService) { }

  loginchk = new FormGroup ({
    email: new FormControl (''),
    password: new FormControl ('')
  });

  ngOnInit(): void {
  }

  logCollect(){
    //console.log (this.loginchk.value);
    return this.resto.logResto(this.loginchk.value).subscribe(result =>{
      console.log(result);
    })

  }
  
}

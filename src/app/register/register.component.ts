import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'

import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
alert: boolean=false
  constructor(private resto:RestoService) { }

  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })


  ngOnInit(): void {
  }

  regcollect(){
    console.log(this.register.value)
    return this.resto.registerResto(this.register.value).subscribe(result => {
      console.log(result);
      this.alert = true

    })
  }

  closeAlert(){
    this.alert = false
  }
  

}

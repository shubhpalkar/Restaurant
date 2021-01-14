import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl('')
  })



  ngOnInit(): void {
  }
alert: boolean= false;
  addData() {
    //console.log(this.addResto.value);    for get() value 

    
    this.resto.addSave(this.addResto.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
    }
    )
    this.addResto.reset({});
  };

  closeAlter(){
    this.alert = false;
  }


}

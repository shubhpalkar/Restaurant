import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit {
alert: boolean=false
  constructor(private router:ActivatedRoute, private resto:RestoService ) { }

  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl('')
  })


  ngOnInit(): void {
    //console.log (this.router.snapshot.params.id); for getting id only

    //below command use for retrive commplete information of user
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe(result => {
      console.log (result);
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        number: new FormControl(result['number'])
      });
      
    });
  }

  updateCollection(){
    //console.log("item",this.editResto.value);
    this.resto.updateCurrentResto(this.router.snapshot.params.id,this.editResto.value).subscribe(result => {
      console.log(result);
      this.alert = true
    })
  }

  closeAlert(){
    this.alert = false;
  }

}

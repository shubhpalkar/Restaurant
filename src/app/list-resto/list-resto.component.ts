import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private restoData: RestoService) { }
  
collection:any = [];
  ngOnInit(): void {
    this.restoData.getList().subscribe(result => {
       console.log (result);
    //onsole.log (this.restoData.getList());
    this.collection = result;
   });
}

deleteR(item){
console.log (item)

//this.collection.splice (item-1, 1);
this.restoData.deleteR(item).subscribe((result) => {
  console.log (result);
  this.collection.splice (item-1, 1);
});
  }

}

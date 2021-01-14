import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/Restaurance";
  rooturl = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }

  addSave(data) {
    //console.log(data);
    return this.http.post(this.url,data);
  }

  deleteR(id){
    console.log(this.url);
    return this.http.delete(this.url+"/"+id);

  }

  getCurrentResto(id){
    return this.http.get(this.url+"/"+id);
  }

  updateCurrentResto(id,data){
    return this.http.put(this.url+"/"+id,data);
  }

  registerResto(data){
    return this.http.post(this.rooturl+"/users",data);
  }

  logResto(data)
{
  return this.http.post(this.url,data);
}

}

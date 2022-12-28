import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  postWorker(data){
    return this.http.post<any>( "http://localhost:3000/workers/",data);
  }
  getWorkers(){
    return this.http.get<any>( "http://localhost:3000/workers/");
  }
  putWorker(data:any,id:number){
    return this.http.put<any>( "http://localhost:3000/workers/"+id,data);
  }
  deleteWorker(id:number){
    return this.http.delete<any>( "http://localhost:3000/workers/"+id)
  }
  postLog(data){
    return this.http.post<any>( "http://localhost:3000/construction-logs",data)
  }
  postContact(data){
    return this.http.post<any>( "http://localhost:3000/contacts",data)
  }
}

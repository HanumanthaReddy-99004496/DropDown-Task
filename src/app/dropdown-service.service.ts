import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drop } from './drop';
@Injectable({
  providedIn: 'root'
})
export class DropdownServiceService {

  constructor(private http:HttpClient) {}
    fetchData(){
      return this.http.get<Drop[]>("http://localhost:4200/assets/json/api.json");
    }
   }


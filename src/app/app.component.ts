import { Component } from '@angular/core';
import { DropdownServiceService } from './dropdown-service.service';
import { Drop } from './drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DropdownTask';
  constructor(private service:DropdownServiceService){}

  

 

statesList: Array<any>=[];
citiesList: Array<any>=[];
  countrySelected: string ="choose country";
  stateSelected:string="choose state"
  countryList:Array<any>=[];
  ngOnInit(){
    this.service.fetchData().subscribe(res=>this.countryList=res);
  }
countryChange(country:any){
  console.log(this.countrySelected);
this.statesList=this.countryList.find((c:any)=>c.name==this.countrySelected).states;
}
stateChange(state:any){
this.citiesList=this.countryList.find((c:any)=>c.name==this.countrySelected).states.find((s:any)=>s.name==this.stateSelected).cities;
}
}

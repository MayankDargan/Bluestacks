import { Component, OnInit } from '@angular/core';
import {FetchdataService} from '../fetchdata.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  model: any;
  constructor(private fetchDataService : FetchdataService) {
   }

   numberOfDays(date){
     if(new Date(date) < new Date()){
       return "hello";
     }else{
        return "hi";
     }
   }

  ngOnInit() {
    this.fetchDataService.getJSON().subscribe(data => {
        console.log(data);
        this.model = data.campaigns;
        console.log(this.model);
    });
  }

}

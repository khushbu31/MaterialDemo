import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  objects=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response:any) =>{
      // this.objects = response.stationBeanList;
        for (let key of response.stationBeanList) {
            console.log(typeof key.stationName,"Station Name");
            this.objects.push(key.stationName);
            console.log(typeof this.objects,"Object");
        }
        console.log(this.objects);
      }
    );
  }
    
}
      
    


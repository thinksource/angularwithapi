import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature';
import { BikewiseService } from '../shared/bikewise.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {
  features: Feature[];

  constructor(private bikeService:BikewiseService) { }

  ngOnInit() {
  }
  
  dosearch(type: string, location: string) {
    let that = this;
    this.bikeService.typeEvent.emit(type);
    let ob = this.bikeService.getIncidents(type, location);
    ob.subscribe( x => {
        that.bikeService.searchEvent.emit(x);
      }
    );

  }
}

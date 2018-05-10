import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature';
import { FEATURE } from '../mock-features';
import { BikewiseService } from '../shared/bikewise.service';
@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {
  features: Object[];
  showfeatues: Object[];
  constructor(private bikeService:BikewiseService) { }

  ngOnInit() {
    var that = this;
    this.features = [];
    this.bikeService.searchEvent.subscribe(params => {
      
      console.log(params.constructor.name);
      that.features = params;
      that.showfeatues = params.slice(0, 10);
      console.log(that.showfeatues);
    });
    
  }
  
  gopage(page: number) {
    let begin = (page - 1) * 10;
    let end = page * 10;
    if (this.features.length > begin) { 
      end = this.features.length > end ? end : this.features.length;
      this.showfeatues = this.features.slice(begin, end);
    }
    
  }

}

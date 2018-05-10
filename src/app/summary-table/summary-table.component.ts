import { Component, OnInit } from '@angular/core';
import { BikewiseService } from '../shared/bikewise.service';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {
  type: string;
  timesc: number[] = new Array<number>(24);
  max_num: number;
  max_hour: number;
  result_account: number;
  constructor(private bikeService: BikewiseService) {

   }

  ngOnInit() {
    let that = this;
    console.log(this.timesc);
    this.bikeService.searchEvent.subscribe(params => {
      this.result_account = params.length;
      this.timesc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let feature of params) {
        let td = this.int2time(feature.occurred_at);
        let th: number = td.getHours();
        let tm: number = td.getMinutes();
        let temp = tm > 30 ? th + 1 : th;
        if (temp >= 24) temp = 0;
        this.timesc[temp] += 1;
      }
      console.log(this.timesc);
      let tmp_max = 0;
      let tmp_max_index = 0;
      for (let i in this.timesc) { 
        if (this.timesc[i] > tmp_max) { 
          tmp_max = this.timesc[i];
          tmp_max_index = +i;
        }
      }
      console.log(tmp_max);
      console.log(tmp_max_index);
      this.max_num = tmp_max;
      this.max_hour = tmp_max_index;
    });
    this.bikeService.typeEvent.subscribe(typestring => this.type=typestring);
  };

  int2time(value: number): Date { 
    let re = new Date();
    re.setTime(value*1000);
    return re;
  }
}

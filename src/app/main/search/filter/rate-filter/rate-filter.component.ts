import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-rate-filter',
  templateUrl: './rate-filter.component.html',
  styleUrls: ['./rate-filter.component.css']
})
export class RateFilterComponent implements OnInit {

  state: {
    low: number,
    high: number
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.state = this.searchService.TempRate;

  }

  toggleRate(event: any)  {
    this.searchService.RateFilter = this.state;
  }

}

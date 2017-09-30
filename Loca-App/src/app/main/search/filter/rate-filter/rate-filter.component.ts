import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-rate-filter',
  templateUrl: './rate-filter.component.html',
  styleUrls: ['./rate-filter.component.css']
})
export class RateFilterComponent implements OnInit {

  @ViewChild('slider') slider;
  @Input() ParentTop: number;
  @Input() ParentLeft: number;
  ParentTopOffset: string;
  ParentLeftOffset: string;
  max: number = 2500;
  min: number = 0;
  someRange = [this.min,this.max];

  state: {
    low: number,
    high: number
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.state = this.searchService.TempRate;
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 130 + 'px';
  }

  refreshPosition(event)  {
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 130 + 'px';
  }



  toggleRate(event: any)  {
    this.state.high = (event[1]);
    this.state.low = (event[0]);
    this.searchService.RateFilter = this.state;
  }

}

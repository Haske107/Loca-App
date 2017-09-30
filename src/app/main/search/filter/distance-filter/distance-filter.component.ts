import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-distance-filter',
  templateUrl: './distance-filter.component.html',
  styleUrls: ['./distance-filter.component.css']
})
export class DistanceFilterComponent implements OnInit {

  @Input() ParentTop: number;
  @Input() ParentLeft: number;
  ParentTopOffset: string;
  ParentLeftOffset: string;

  state: {
    CurrentLocation : {lat: number, lng: number},
    Distance: number
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.state = this.searchService.TempDistance;
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
  }

  refreshPosition(event)  {
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
  }

  toggleDistance(value : number) {
    this.state.Distance = value;
    this.searchService.DistanceFilter = this.state;
  }

}

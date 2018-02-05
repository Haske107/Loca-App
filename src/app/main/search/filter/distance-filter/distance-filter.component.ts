import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-distance-filter',
  templateUrl: './distance-filter.component.html',
  styleUrls: ['./distance-filter.component.css']
})
export class DistanceFilterComponent implements OnInit {

  value = 0;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.value = this.searchService.TempDistance.Distance;
  }

  changeDistance() {
    this.searchService.TempDistance.Distance = this.value;
    this.searchService.onDistance.emit(this.searchService.TempDistance);
  }

}

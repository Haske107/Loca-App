import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-bathroom-filter',
  templateUrl: './bathroom-filter.component.html',
  styleUrls: ['./bathroom-filter.component.css']
})
export class BathroomFilterComponent implements OnInit, OnChanges {

  value;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.value);
      this.searchService.BathroomFilter = this.value;
  }
}

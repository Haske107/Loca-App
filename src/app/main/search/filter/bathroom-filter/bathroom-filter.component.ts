import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-bathroom-filter',
  templateUrl: './bathroom-filter.component.html',
  styleUrls: ['./bathroom-filter.component.css']
})
export class BathroomFilterComponent implements OnInit{

  set value(value: any) {
    console.log(value);
    this.change(value);
  }

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  change(value: number) {
    this.searchService.BathroomFilter = value;
  }
}

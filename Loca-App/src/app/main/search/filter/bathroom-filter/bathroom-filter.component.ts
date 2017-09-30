import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-bathroom-filter',
  templateUrl: './bathroom-filter.component.html',
  styleUrls: ['./bathroom-filter.component.css']
})
export class BathroomFilterComponent implements OnInit {


  @Input() ParentTop: number;
  @Input() ParentLeft: number;
  ParentTopOffset: string;
  ParentLeftOffset: string;

  state: {};

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.state = this.searchService.TempBathroom;
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
    console.log(this.ParentLeftOffset);
  }

  refreshPosition(event)  {
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 100 + 'px';
  }

  toggleBathroom(value : string) {
    this.state[value] = !this.state[value];
    this.searchService.BathroomFilter = this.state;

  }
}

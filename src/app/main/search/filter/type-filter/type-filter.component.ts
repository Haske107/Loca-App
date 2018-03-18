import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {


  @Input() ParentTop: number;
  @Input() ParentLeft: number;
  ParentTopOffset: string;
  ParentLeftOffset: string;

  states: {
      Apartment: boolean,
      Home: boolean,
      School: boolean,
      Restaurant: boolean,
      Bar: boolean,
      Park: boolean,
      Street: boolean,
      Business: boolean,
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.states = this.searchService.TempType;
    this.refreshPosition(null);
  }

  toggleType(value: string) {
    this.states[value] = !this.states[value];
    this.searchService.TypeFilter = this.states;
  }

  refreshPosition(event)  {
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 156 + 'px';
  }
}

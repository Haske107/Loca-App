import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-electricity-filter',
  templateUrl: './electricity-filter.component.html',
  styleUrls: ['./electricity-filter.component.css']
})
export class ElectricityFilterComponent implements OnInit {

  @Input() ParentTop: number;
  @Input() ParentLeft: number;
  ParentTopOffset: string;
  ParentLeftOffset: string;

  state: {};

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.state = this.searchService.TempElectricity;
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
  }

  refreshPosition(event)  {
    this.ParentTopOffset = this.ParentTop + 40 + 'px';
    this.ParentLeftOffset = this.ParentLeft - 50 + 'px';
  }

  toggleElectricity(value : string) {
    this.state[value] = !this.state[value];
    this.searchService.ElectricityFilter = this.state;
  }
}

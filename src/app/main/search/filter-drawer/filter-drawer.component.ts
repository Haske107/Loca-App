import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-filter-drawer',
  templateUrl: './filter-drawer.component.html',
  styleUrls: ['./filter-drawer.component.scss'],
})
export class FilterDrawerComponent implements OnInit {

  Query = "";


  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  updateInput()  {
    this.searchService.input = this.Query;
  }

}

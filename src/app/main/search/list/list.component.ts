import {Component, Input, OnInit} from '@angular/core';
import {Location} from './../../../ts models/location.model';
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  electrictyObject: {};
  typeObject: {};
  bathroomObject: {};
  searchString: string = '';
  rateObject: {};
  @Input() locations: Location[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.onRate.subscribe(
      res => {
        this.rateObject = res;
      }
    );
    this.searchService.onQuery.subscribe(
      res =>  {
        this.searchString = res;
      }
    );
    this.searchService.onType.subscribe(
      res =>  {
        this.typeObject = res;
      }
    );
    this.searchService.onElectricity.subscribe(
      res =>  {
        this.electrictyObject = res;
      }
    );
    this.searchService.onBathroom.subscribe(
      res =>  {
        this.bathroomObject = res;
      }
    );
  }
}

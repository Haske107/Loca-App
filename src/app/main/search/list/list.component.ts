import {Component, Input, OnInit} from '@angular/core';
import {Location} from './../../../ts models/location.model';
import {SearchService} from '../../../services/search.service';
import {Prod, Dev} from '../../../../URLSwitcher';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Prod;
  Dev;
  electrictyObject: {};
  typeObject: {};
  bathroomObject: {};
  searchString = '';
  rateObject: {};
  @Input() locations: Location[];

  constructor(private searchService: SearchService) {
    this.Prod = Prod;
    this.Dev = Dev;
  }

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

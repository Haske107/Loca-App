/**
 * Created by Jeff Haskell on 7/14/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Location} from "../../../ts models/location.model";
import {LocationService} from "../../../services/location.service";
import {Collection} from "../../../ts models/collection.model";
import {CollectionService} from "../../../services/collection.service";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'grid',
  templateUrl:'grid.component.html',
  styleUrls: ['grid.component.css'],
  providers: [CollectionService]
})

export class SearchGrid implements OnInit{
    electrictyObject: {};
    typeObject: {};
    bathroomObject: {};
    rateObject: {};
    searchString: string = '';
    @Input() locations: Location[] = [];
    collections: Collection[]=[];
    constructor(
                private collectionService: CollectionService,
                private searchService: SearchService)   {}
    ngOnInit() {
      this.searchService.onRate.subscribe(
        res => {
          this.rateObject = res;
        }
      );
      this.searchService.onQuery.subscribe(
        res => {
          this.searchString = res;
        }
      );
      this.searchService.onType.subscribe(
        res => {
          this.typeObject = res;
        }
      );
      this.searchService.onElectricity.subscribe(
        res => {
          this.electrictyObject = res;
        }
      );
      this.searchService.onBathroom.subscribe(
        res => {
          this.bathroomObject = res;
        }
      );
    }
}

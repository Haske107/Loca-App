import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Collection} from "../../../../ts models/collection.model";
import {Location} from "../../../../ts models/location.model";
import {CollectionService} from "../../../../services/collection.service";
import {FileService} from "../../../../services/file.service";
import {LocationService} from "../../../../services/location.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CollectionService]
})
export class CardComponent implements OnInit {

  @Input() location: Location;

  @Input() collections: Collection[];
  filtered: Collection[] = [];


  isHovering = false;

  constructor(private fileService: FileService, private cdr: ChangeDetectorRef, private locationService: LocationService)  {}

  ngOnInit() {
  }

  filter()  {
    this.collections.forEach(collection =>  {
      let valid = true;
      collection.locations.forEach(locationID =>  {
          if(locationID === this.location._id)  {
            valid = false;
          }
      });
      if(valid) {
        this.filtered.push(collection);
      }
      else {
      }
    });
  }

  toLocationProfile(location: Location) {
    this.locationService.toProfilePage(location);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {Location} from "../../ts models/location.model";

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css'],
})
export class LocationProfileComponent implements OnInit {

  location: Location;

  constructor(public locationService: LocationService) {
    this.location = this.locationService.getCurrentLocation();
  }

  ngOnInit() {
  }

}

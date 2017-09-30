import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../../services/map.service";
import {Location} from "../../../ts models/location.model";
import {Router} from "@angular/router";
import {LocationService} from "../../../services/location.service";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css' ],
  providers: [MapService]
})
export class MapComponent implements OnInit {

  //VARIABLES HOLDING FILTER PARAMETERS
  searchString: string = '';
  typeObject: {};
  electrictyObject: {};
  bathroomObject: {};
  rateObject: {};

  //HTML REFERENCES
  @ViewChild('googlemap') googlemap ;

  //LOCATION INJECTION
  @Input() locations: Location[];
  CurrentLocation: any;


  constructor(private router: Router, private locationService: LocationService, private searchService: SearchService) { }

  ngOnInit() {
    this.CurrentLocation = this.searchService.TempDistance.CurrentLocation;
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
    this.searchService.onRate.subscribe(
      res => {
        this.rateObject = res;
      }
    );

    //STYLE THE MAP
    this.googlemap.styles = [
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fffffd"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7acc85"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 700
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#00bcd4"
          }
        ]
      }
    ];
    this.googlemap.zoom = 13;
  }
  toLocationProfile(location: Location) {
    this.locationService.toProfilePage(location);
  }
}

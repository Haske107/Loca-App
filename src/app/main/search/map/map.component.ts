import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map.service';
import {Location} from '../../../ts models/location.model';
import {Router} from '@angular/router';
import {LocationService} from '../../../services/location.service';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css' ],
  providers: [MapService]
})
export class MapComponent implements OnInit {



  // VARIABLES HOLDING FILTER PARAMETERS
  searchString = '';
  typeObject: {};
  electrictyObject: {};
  bathroomObject: number;
  rateObject: {};

  // HTML REFERENCES
  @ViewChild('googlemap') googlemap ;

  // LOCATION INJECTION
  @Input() locations: Location[];
  CurrentLocation: any;

  constructor(private searchService: SearchService, private locationService: LocationService) { }

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

    // STYLE THE MAP
      this.googlemap.styles = [
      {
        'featureType': 'landscape.natural',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#efefef'
          },
          {
            'visibility': 'on'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#f3f3f3'
          },
          {
            'visibility': 'off'
          }
        ]
      },
      {
          'featureType': 'poi',
          'elementType': 'business',
          'stylers': [
              {
                  'color': '#f3f3f3'
              },
              {
                  'visibility': 'off'
              }
          ]
      },
          {
              'featureType': 'transit',
              'stylers': [
                  {
                      'color': '#f3f3f3'
                  },
                  {
                      'visibility': 'off'
                  }
              ]
          },
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [

          {
            'lightness': 100

          },
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'lightness': 700
          },
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'water',
        'stylers': [
          {
            'color': '#a1a0a4'
          }
        ]
      }
    ];
    this.googlemap.zoom = 13;
    this.googlemap.disableDefaultUI = true;
  }
    toLocationProfile(location: Location) {
        this.locationService.toProfilePage(location);
    }
}

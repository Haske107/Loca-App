import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-city-map',
  templateUrl: './city-map.component.html',
  styleUrls: ['./city-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CityMapComponent implements OnInit {

  // HTML REFERENCES
  @ViewChild('googlemap') googlemap ;

  // LOCATION INJECTION
  @Input() location: Location;

  constructor() { }

    ngOnInit() {
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
        this.googlemap.zoom = 17;
    }

}

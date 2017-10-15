import {Component, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map.service';

@Component({
    selector: 'app-verify-location',
    templateUrl: './verify-location.component.html',
    styleUrls: ['./verify-location.component.scss'],
    providers: [MapService]
})
export class VerifyLocationComponent implements OnInit {

    lat = 33.78595702552393;
    lng = -117.85323192626953;
    @ViewChild('googlemaps') googlemap ;


    Street = '';
    City  = '';
    State  = '';
    Country  = '';
    Postal  = '';

    constructor(private mapService: MapService) {

    }

    ngOnInit() {
        this.googlemap.styles = [
            {
                'featureType': 'landscape.natural',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#fffffd'
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
                        'color': '#7acc85'
                    },
                    {
                        'visibility': 'on'
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
                        'color': '#00bcd4'
                    }
                ]
            }
        ];
        this.googlemap.zoom = 17;
        this.googlemap.zoomControl = false;
        this.googlemap.streetViewControl = false;

    }

    onSubmit()    {
        if (this.Street !== '' && this.City !== '' && this.State !== '')   {
            this.mapService.geoCodeRaw(this.Street, this.City, this.State)
                .subscribe(
                    data => {
                        this.lat = data.results[0].geometry.location.lat;
                        this.lng = data.results[0].geometry.location.lng;
                        this.googlemap.triggerResize();
                    }
                );
        }

        //wait for resposne
        //change map position
    }
}
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map.service';
import {inlineInterpolate} from "@angular/core/src/view";

@Component({
    selector: 'app-verify-location',
    templateUrl: './verify-location.component.html',
    styleUrls: ['./verify-location.component.scss'],
    providers: [MapService]
})
export class VerifyLocationComponent implements OnInit {

    @Output() locationFound = new EventEmitter<any>();
    @ViewChild('googlemaps') googlemap ;


    height =  '0px';
    display = 'none';
    buttonDisplay = 'none';
    doneDisplay = 'none';
    title = "Is this your property?";
    drag = false;
    lat = 33.78595702552393;
    lng = -117.85323192626953;
    mlat: number;
    mlng: number;
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
                        this.height = '50px';
                        this.display = 'inline';
                        this.buttonDisplay = 'inline';
                    }
                );
        }
    }

    ifYes() {
        this.locationFound.emit({lat: this.lat, lng: this.lng});
    }
    ifNo()  {
        this.drag = true;
        this.title ="Drag marker into place.";
        this.buttonDisplay = 'none';
        this.doneDisplay = 'inline';
    }
    done()  {
        this.display = 'none';
        this.doneDisplay = 'none';
        this.drag = false;
        this.locationFound.emit({lat: this.mlat, lng: this.mlng});
    }
    setMarkerCoords(event: any)   {
        this.mlat = event.coords.lat;
        this.mlng = event.coords.lng;
    }
    getCurrentLocation()    {
        navigator.geolocation.getCurrentPosition(position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.googlemap.triggerResize();
            this.height = '50px';
            this.display = 'inline';
            this.buttonDisplay = 'inline';
        });
    }




}
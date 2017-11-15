import {Component, EventEmitter, Host, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map.service';
import {inlineInterpolate} from '@angular/core/src/view';
import {DOCUMENT} from '@angular/common';
import {UploadComponent} from "../upload.component";
import {UploadService} from "../upload.service";

@Component({
    selector: 'app-verify-location',
    templateUrl: './verify-location.component.html',
    styleUrls: ['./verify-location.component.scss'],
    providers: [MapService]
})
export class VerifyLocationComponent implements OnInit {

    Street = '';
    City = '';
    State = '';
    Country = '';
    Postal = '';
    mlat: number;
    mlng: number;
    lat = 33.78595702552393;
    lng = -117.85323192626953;


    @ViewChild('googlemaps') googlemap;
    MapDisplay = 'inline';
    LoadingDisplay = 'none';
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';
    display = 'none';
    buttonDisplay = 'none';
    doneDisplay = 'none';
    title = 'Is this your property?';
    drag = false;


    constructor(private mapService: MapService, @Inject(DOCUMENT) private document: Document, private uploadService: UploadService) {

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
        if (this.uploadService.NewLocation.address)  {
            this.Street = this.uploadService.NewLocation.address.streetAddress;
            this.City = this.uploadService.NewLocation.address.city;
            this.State = this.uploadService.NewLocation.address.state;
            this.Country = this.uploadService.NewLocation.address.country;
            this.Postal = this.uploadService.NewLocation.address.zip;
        }


    }

    emitAddressObject() {
        this.uploadService.NewLocation.address = {
            streetAddress: this.Street,
            city: this.City,
            state: this.State,
            zip: this.Postal,
            country: this.Country};
        console.log(this.uploadService.NewLocation);
    }

    setMarkerCoords(event: any) {
        this.mlat = event.coords.lat;
        this.mlng = event.coords.lng;
        this.uploadService.NewLocation.coordinates = {lat: this.mlat, lng: this.mlng};
    }

    getCurrentLocation() {
        this.MapDisplay = 'none';
        this.LoadingDisplay = 'inline';
        navigator.geolocation.getCurrentPosition(position => {
            this.LoadingDisplay = 'none';
            this.MapDisplay = 'inline';
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.uploadService.NewLocation.coordinates = {lat: this.lat, lng: this.lng};
            this.googlemap.triggerResize();
            this.height = '50px';
            this.display = 'inline';
            this.buttonDisplay = 'inline';
        });
    }

    onSubmit() {
        if (this.Street !== '' && this.City !== '' && this.State !== '') {
            this.mapService.geoCodeRaw(this.Street, this.City, this.State)
                .subscribe(
                    data => {
                        this.lat = data.results[0].geometry.location.lat;
                        this.lng = data.results[0].geometry.location.lng;
                        this.googlemap.triggerResize();
                        this.height = '50px';
                        this.display = 'inline';
                        this.buttonDisplay = 'inline';
                        this.uploadService.NewLocation.coordinates = {lat: this.lat, lng: this.lng};
                    }
                );
        }
    }

    ifYes() {
        this.uploadService.NewLocation.coordinates = {lat: this.lat, lng: this.lng};
        this.color = '#7acc85';
        this.textcolor = 'white';
        this.cursor = 'pointer';
        this.display = 'none';

    }

    ifNo() {
        this.drag = true;
        this.title = 'Drag marker into place.';
        this.buttonDisplay = 'none';
        this.doneDisplay = 'inline';
    }

    done() {
        this.display = 'none';
        this.doneDisplay = 'none';
        this.drag = false;
        this.uploadService.NewLocation.coordinates = {lat: this.mlat, lng: this.mlng};
        this.color = '#7acc85';
        this.textcolor = 'white';
        this.cursor = 'pointer';

    }
}




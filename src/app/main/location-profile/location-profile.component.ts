import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Location} from '../../ts models/location.model';
import {User} from '../../ts models/user.model';
import {Router} from '@angular/router';
import {Prod, Dev} from '../../../URLSwitcher';
import {DomSanitizer} from '@angular/platform-browser';
import {PageStateService} from '../../services/page.state.service';
import {UserService} from '../../services/user.service';
import {City} from '../../ts models/city.model';
import {CityService} from '../../services/city.service';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css'],
  providers: [UserService, CityService]
})
export class LocationProfileComponent implements OnInit, OnDestroy {

    location: Location;
    city: City = new City();
    user: User = new User();
    coordinates: any;
    @ViewChild('googlemap') googlemap;
    Prod;
    Dev;
    map;


    // PHOTO ARRAY
    Photos = ['https://localhost:3000/files/5998b7ed30637b2f701909ad'];
    ImgUrl;
    CityPhoto;

    constructor(public locationService: LocationService,
                public cityService: CityService,
                private router: Router,
                private sanitzer: DomSanitizer,
                private userService: UserService,
                private pageStateService: PageStateService) {
        if (localStorage.getItem('currloc')) {
            // POPULATE LOCATION WITH CURRENT LOCATION
            this.location = JSON.parse(localStorage.getItem('currloc'));
            this.locationService.location = this.location;
            // POPULATE USER WITH LOCATION'S USER
            this.userService.getUser(this.location.user).subscribe(
                data => {
                    this.user = data.obj;
                    //  POPULATE CITY WITH RELEVANT CITY
                    this.cityService.getCity(this.location.address.city)
                        .subscribe(
                            _data => {
                                this.city = _data.obj;



                                mapboxgl.accessToken = 'pk.eyJ1IjoiaGFza2UxMDciLCJhIjoiY2plODUyaWx2MDE4bzJxcGhoNHdsY201MSJ9.ZUYUuHcwZZ2KsDkeeP_uAA';
                                const map = new mapboxgl.Map({
                                    container: 'mapid',
                                    style: 'mapbox://styles/mapbox/light-v9',
                                    minZoom: 10,
                                    center: {lat: this.city.center.lat, lng: this.city.center.lng}
                                });
                                map.on('load', () => {
                                    map.addLayer({
                                        'id': 'City',
                                        'type': 'fill',
                                        'source': {
                                            'type': 'geojson',
                                            'data': JSON.parse(this.city.boundarycoordinates)
                                        },
                                        'layout': {},
                                        'paint': {
                                            'fill-color': '#088',
                                            'fill-opacity': 0.8
                                        }
                                    });
                                });
                            }
                        );
                }
            );
        } else {
            this.location = this.locationService.location;
            if (!location) {
                this.router.navigateByUrl('main/search');
            }
        }

        // POPULATE AND SANITIZE IMAGE LINKS
        this.ImgUrl = 'https://' + Prod + '/files/' + this.location._id;
        this.ImgUrl = this.sanitzer.bypassSecurityTrustStyle(`url(${this.ImgUrl})`);
        this.CityPhoto = 'https://a5j0u479x2t4e35gducjhz15-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/afe88c2c9cade7b0fd7a9fe6ec3bba1b-750x555.jpg';
        this.CityPhoto = this.sanitzer.bypassSecurityTrustStyle(`url(${this.CityPhoto})`);
        this.Prod = Prod;
        this.Dev = Dev;
    }

    ngOnDestroy() {
        this.pageStateService.Location = false;
    }

    ngOnInit() {


        this.pageStateService.Location = true;

    }

}


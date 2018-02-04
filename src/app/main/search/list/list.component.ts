import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Location} from './../../../ts models/location.model';
import {SearchService} from '../../../services/search.service';
import {Prod, Dev} from '../../../../URLSwitcher';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";
import {LocationService} from "../../../services/location.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {
  Prod;
  Dev;
  electrictyObject: {};
  typeObject: {};
  bathroomObject: {};
  searchString = '';
  rateObject: {};
  @Input() locations: Location[];
  distanceArray: number[];



  constructor(private searchService: SearchService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private locationService: LocationService) {
    this.Prod = Prod;
    this.Dev = Dev;
      iconRegistry.addSvgIcon('flash', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Power.svg'));
      iconRegistry.addSvgIcon('bathroom', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Bathroom.svg'));
      iconRegistry.addSvgIcon('like', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Star.svg'));

  }

  ngOnInit() {


    }

   ngAfterContentInit() {
        for (let i = 0; i < this.locations.length; ++i) {
            console.log('TEST');
            this.distanceArray[i] = this.getDistanceFromLatLonInMi(
                this.locations[i].coordinates.lat,
                this.locations[i].coordinates.lng,
                this.searchService.TempDistance.CurrentLocation.lat,
                this.searchService.TempDistance.CurrentLocation.lng
            );
      }
    this.searchService.onRate.subscribe(
      res => {
        this.rateObject = res;
      }
    );
    this.searchService.onQuery.subscribe(
      res =>  {
        this.searchString = res;
        console.log(res);
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
  }

    colorFromType(Type: String) {
    if (Type === 'Home')  {
      return '#5192da';
    }
    if (Type === 'Business')  {
        return '#dada51';
    }
    if (Type === 'Park')  {
        return '#7acc85';
    }
    if (Type === 'School')  {
        return '#e6893d';
    }
    if (Type === 'Bar')  {
        return '#825fe2';
    }
    if (Type === 'Restaurant')  {
        return '#e27b5f';
    }
    if (Type === 'Apartment')  {
        return '#5fe0e2';
    }
    if (Type === 'Studio')  {
        return '#bfe25f';
    }
  }

  getDistanceFromLatLonInMi(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
      const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
      const dLon = this.deg2rad(lon2 - lon1);
      const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
        return d / 1.60934;
    }

     deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    toLocationProfile(location: Location) {
        this.locationService.toProfilePage(location);
    }



}

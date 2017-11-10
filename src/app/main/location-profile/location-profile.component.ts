import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Location} from '../../ts models/location.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css'],
})
export class LocationProfileComponent implements OnInit {

  location: Location;

  constructor(public locationService: LocationService, private router: Router) {
        if (localStorage.getItem('currloc')) {
            this.location = JSON.parse(localStorage.getItem('currloc'));
            this.locationService.location = this.location;
        }   else {
            this.location = this.locationService.location;
            if (!location) {
                this.router.navigateByUrl('main/search');
            }
        }
  }

  ngOnInit() {

  }

}

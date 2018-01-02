import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Location} from '../../ts models/location.model';
import {Router} from '@angular/router';
import {Prod, Dev} from '../../../URLSwitcher';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css'],
})
export class LocationProfileComponent implements OnInit {

  location: Location;
  Prod;
  Dev;
  ImgUrl;


  constructor(public locationService: LocationService,
              private router: Router,
              private sanitzer: DomSanitizer) {
        if (localStorage.getItem('currloc')) {
            this.location = JSON.parse(localStorage.getItem('currloc'));
            this.locationService.location = this.location;
        }   else {
            this.location = this.locationService.location;
            if (!location) {
                this.router.navigateByUrl('main/search');
            }
        }
        this.ImgUrl = 'https://' + Dev + '/files/' + this.location._id;

      this.ImgUrl = this.sanitzer.bypassSecurityTrustStyle("url('" + this.ImgUrl + "')");
        this.Prod = Prod;
        this.Dev = Dev;
  }

  ngOnInit() {

  }

}

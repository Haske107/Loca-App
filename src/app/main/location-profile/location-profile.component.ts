import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Location} from '../../ts models/location.model';
import {User} from '../../ts models/user.model';
import {Router} from '@angular/router';
import {Prod, Dev} from '../../../URLSwitcher';
import {DomSanitizer} from "@angular/platform-browser";
import {PageStateService} from "../../services/page.state.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css'],
    providers: [UserService]
})
export class LocationProfileComponent implements OnInit, OnDestroy {

  location: Location;
  user: User = new User();
  Prod;
  Dev;


  // PHOTO ARRAY
    Photos = ['https://localhost:3000/files/5998b7ed30637b2f701909ad'];
    ImgUrl;
    CityPhoto;

    constructor(public locationService: LocationService,
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
                  console.log(data);
                  this.user = data.obj;
              }
          );
      }   else {
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
  ngOnInit() {
      this.pageStateService.Location = true;
      console.log(this.pageStateService.Location);
  }
  ngOnDestroy() {
      this.pageStateService.Location = false;
      console.log(this.pageStateService.Location);
  }

}

import {Component, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {Location} from '../../ts models/location.model';
import {PageStateService} from '../../services/page.state.service';
import {FileService} from '../../services/file.service';
import {UploadService} from '../upload/upload.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent implements OnInit {
  TestLocation = new Location(
      '5a63b604d1306000148da27a',
      {streetAddress: '338 W Kelly Ave', 'city': 'Orange', 'state': 'CA', 'zip': '92866', 'country': 'US'},
      'Test Location',
      'This is a description',
      [],
      25,
      25,
      'House',
      2,
      true,
      2,
      2,
      2,
      2,
      2,
      true,
      true,
      true
  );

  ProfilePicture = '';

  constructor(private router: Router,
              private locationService: LocationService,
              private authService: AuthService,
              private pageStateService: PageStateService,
              private fileService: FileService,
              private uploadService: UploadService) { }

  ngOnInit() {
      this.ProfilePicture = localStorage.getItem('profile') ?
          JSON.parse(localStorage.getItem('profile')).picture_large : '';
  }

  routeToPost() {
      if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/main/post');
      } else  {
          this.authService.login();
      }
  }
}

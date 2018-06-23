import {Component, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from '../../services/location.service';
import {AuthService} from '../../services/auth.service';
import {Location} from '../../ts models/location.model';
import {PageStateService} from '../../services/page.state.service';
import {FileService} from "../../services/file.service";
import {UploadService} from "../upload/upload.service";

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


  constructor(private router: Router,
              private locationService: LocationService,
              private authService: AuthService,
              private pageStateService: PageStateService,
              private fileService: FileService,
              private uploadService: UploadService) { }

  ngOnInit() {

  }

  routeToPost() {
      // if (this.authService.isAuthenticated()) {
      // this.router.navigateByUrl('/main/post');
      // } else  {
      //     this.authService.login();
      // }
      this.router.navigateByUrl('/main/post');

  }

  logoClick() {
      this.locationService.saveLocation(this.TestLocation).subscribe(
          data => {
              console.log(data);
              // SET CURRENT LOCATION TO NEW LOCATION
              this.locationService.location = data;
              //  CREATE FORMS TO UPLOAD PHOTOS IN
              const galleryphotoformdata = new FormData();
              const mainphotoformdata = new FormData();
              // USE FIRST PHOTO FOR MAIN DISPLAY
              mainphotoformdata.append('main', this.uploadService.Photos[0].file);
              // ITERATE THROUGH REMAINING PHOTOS FOR GALLERY
              for (let i = 1; i < this.uploadService.Photos.length; i++ ) {
                  galleryphotoformdata.append('gallery', this.uploadService.Photos[i].file);
              }
              //  UPLOAD MAIN PHOTO
              this.fileService.uploadMainPhoto(data._id, mainphotoformdata).subscribe(
                  data1 => {
                      // UPLOAD GALLERY PHOTO AFTER WAITING FOR MAIN PHOTO TO UPLOAD
                      this.fileService.uploadGalleryPhotos(data._id, galleryphotoformdata).subscribe(
                          data2 => {
                              localStorage.removeItem('location');
                          },
                          err2 =>  {
                              console.error(err2);
                          }
                      );
                  },
                  err1 => {
                      console.error(err1);
                  }
              );
          },
          err =>  {
              console.error(err);
          }
      );
  }
}

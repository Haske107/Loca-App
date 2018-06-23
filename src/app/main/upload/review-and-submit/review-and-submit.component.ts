import { Component, OnInit } from '@angular/core';
import {UploadService} from '../upload.service';
import {Location} from '../../../ts models/location.model';
import {LocationService} from '../../../services/location.service';
import {FileService} from '../../../services/file.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

    // NG STYLE VARIABLES FOR NEXT BUTTON
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';
    display = 'block';
    MainSpinDisplay = 'none';
    GallerySpinDisplay = 'none';
    CompletedDisplay = 'none';
    MainValue = 0;
    GalleryValue = 0;

  location: Location;

  constructor(
      private uploadService: UploadService,
      private locationService: LocationService,
      private fileService: FileService,
      private router: Router) {
      this.location = this.uploadService.NewLocation;
      this.color = '#7acc85';
      this.textcolor = 'white';
      this.cursor = 'pointer';
  }

  ngOnInit() {
    this.uploadService.ChangeEmitter.subscribe(value => {
        this.location = this.uploadService.NewLocation;
    });
  }

  viewLocation()    {
      this.locationService.toProfilePage(this.locationService.location);
  }

  upload()  {
      // HIDE SUBMIT BUTTON
      this.display = 'none';

      // UPLOAD LOCATION FIRST TO RETRIEVE THE ID
      this.locationService.saveLocation(this.uploadService.NewLocation).subscribe(
    data => {

        // SET CURRENT LOCATION
        this.locationService.location = data.obj;

        // BEGIN LISTENING TO MAIN PERCENTAGE
        const MainPercentWatcher = this.fileService.MainPercentage.subscribe(
            percent =>  {
                this.MainValue = percent;
            }
        );
        this.MainSpinDisplay = 'block';

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
            this.fileService.uploadMainPhoto(data.obj._id, mainphotoformdata).subscribe(
                data1 => {

                    // UNSUBSCRIBE AFTER UPLOAD
                    MainPercentWatcher.unsubscribe();

                    // SUBSCRIBE TO GALLERY PERCENTAGE CHANGES
                    const GalleryPercentWatcher = this.fileService.GalleryPercentage.subscribe(
                        percent =>  {
                            this.GalleryValue = percent;
                        }
                    );

                    // CHANGE DISPLAY STATES
                    this.MainSpinDisplay = 'none';
                    this.GallerySpinDisplay = 'block';

                    // UPLOAD GALLERY PHOTO AFTER WAITING FOR MAIN PHOTO TO UPLOAD
                    this.fileService.uploadGalleryPhotos(data.obj._id, galleryphotoformdata).subscribe(
                        data2 => {

                            // UNSUBSCRIBE AFTER UPLOAD
                            GalleryPercentWatcher.unsubscribe();

                            // CHANGE DISPLAY STATES
                            this.GallerySpinDisplay = 'none';
                            this.CompletedDisplay = 'block';
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

import { Component, OnInit } from '@angular/core';
import {UploadService} from "../upload.service";
import {Location} from "../../../ts models/location.model";

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

  location: Location;

  constructor(private uploadService: UploadService) {
      this.location = this.uploadService.NewLocation;
  }

  ngOnInit() {
    this.uploadService.ChangeEmitter.subscribe(value => {
        this.location = this.uploadService.NewLocation;
    });
  }

}

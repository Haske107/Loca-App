import {Component, EventEmitter, Host, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadComponent} from "../upload.component";

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit {

  // Jason and Lili
    private addr = '';
    private city = '';
    private state = '';
    private zip = '';
    private country = '';
    private propertyTitle = '';
    private locationType = '';
    private locationDescription = '';
    private numBathrooms = 0;
    private numParking = 0;
    private electricity = false;
    private desposit = 0.0;
    private ratePerDay = 0.0;
    @Output() idEmitter = new EventEmitter<string>();
    LocationData: FormGroup;
    Types = [
        {value: 'Home'},
        {value: 'Business'},
        {value: 'Studio'},
        {value: 'Park'},
        {value: 'School'},
        {value: 'Public Space'}
    ];

  constructor(@Host() parent: UploadComponent) {

      this.addr = parent.propertyAddress;
      this.city = parent.propertyCity;
      this.state = parent.propertyState;
      this.zip = parent.propertyZip;
      this.country = parent.propertyCountry;
  }

  ngOnInit() {

      this.LocationData = new FormGroup({
          streetAddress: new FormControl(null, Validators.required),
          city: new FormControl(null , Validators.required),
          state: new FormControl(null , Validators.required),
          zip: new FormControl(null , Validators.required),
          country: new FormControl(null , Validators.required),
          name: new FormControl(null , Validators.required),
          description: new FormControl(null , Validators.required),
          deposit: new FormControl(null , Validators.required),
          rate: new FormControl(null , Validators.required),
          type: new FormControl(null , Validators.required),
          bathrooms: new FormControl(null , Validators.required),
          electricity: new FormControl(null , Validators.required),
          parking: new FormControl(null , Validators.required),
      });

      this.LocationData.get('streetAddress').setValue(this.addr);
      this.LocationData.get('city').setValue(this.city);
      this.LocationData.get('state').setValue(this.state);
      this.LocationData.get('zip').setValue(this.zip);
      this.LocationData.get('country').setValue(this.country);
  }

    incrementBathroom() {
      ++this.numBathrooms;
    }

    decrementBathroom() {
        if (this.numBathrooms >= 1) {
            --this.numBathrooms;
        }
    }

    incrementParking() {
        ++this.numParking;
    }

    decrementParking() {
        if (this.numParking >= 1) {
            --this.numParking;
        }
    }
}

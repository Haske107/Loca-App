import {Component, EventEmitter, Host, OnInit, Output, OnDestroy, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadComponent} from '../upload.component';
import {document} from 'ngx-bootstrap/utils/facade/browser';

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit, OnDestroy, OnChanges {

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
    private deposit = 0.0;
    private ratePerDay = 0.0;

    @Output() idEmitter = new EventEmitter<string>();

    AddressData: FormGroup;
    LocationData: FormGroup;
    DetailsData: FormGroup;

    Types = [
        {value: 'Home'},
        {value: 'Business'},
        {value: 'Studio'},
        {value: 'Park'},
        {value: 'School'},
        {value: 'Public Space'}
    ];

  constructor(@Host() private parent: UploadComponent) {

      this.addr = parent.propertyAddress;
      this.city = parent.propertyCity;
      this.state = parent.propertyState;
      this.zip = parent.propertyZip;
      this.country = parent.propertyCountry;

      this.propertyTitle = parent.propertyTitle;
      this.locationType = parent.locationType;
      this.locationDescription = parent.locationDescription;
      this.deposit = parent.deposit;
      this.ratePerDay = parent.ratePerDay;

      this.numBathrooms = parent.numBathrooms;
      this.numParking = parent.numParking;
      this.electricity = parent.electricity;
  }

  ngOnInit() {

      this.AddressData = new FormGroup({
          streetAddress: new FormControl(null, Validators.required),
          city: new FormControl(null , Validators.required),
          state: new FormControl(null , Validators.required),
          zip: new FormControl(null , [Validators.required, Validators.pattern('\\d\\d\\d\\d\\d')]),
          country: new FormControl(null , Validators.required),
      });

      this.LocationData = new FormGroup({
          name: new FormControl(null , Validators.required),
          description: new FormControl(null , Validators.required),
          type: new FormControl(null , Validators.required),
          deposit: new FormControl(null , [Validators.required, Validators.min(0), Validators.pattern('(?:\\d*\\.)?\\d+')]),
          rate: new FormControl(null , [Validators.required, Validators.min(0), Validators.pattern('(?:\\d*\\.)?\\d+')])
      });

      this.DetailsData = new FormGroup({
          bathrooms: new FormControl(null , Validators.required),
          electricity: new FormControl(null , Validators.required),
          parking: new FormControl(null , Validators.required)
      });

      this.AddressData.get('streetAddress').setValue(this.addr);
      this.AddressData.get('city').setValue(this.city);
      this.AddressData.get('state').setValue(this.state);
      this.AddressData.get('zip').setValue(this.zip);
      this.AddressData.get('country').setValue(this.country);

      this.LocationData.get('name').setValue(this.propertyTitle);
      this.LocationData.get('description').setValue(this.locationDescription);
      this.LocationData.get('type').setValue(this.locationType);
      // this.LocationData.get('deposit').setValue(this.deposit.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      // this.LocationData.get('rate').setValue(this.ratePerDay.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      this.LocationData.get('deposit').setValue(this.deposit.toFixed(2));
      this.LocationData.get('rate').setValue(this.ratePerDay.toFixed(2));
  }
  ngOnDestroy() {
      this.nextStep();
  }
  ngOnChanges() {
      this.nextStep();
  }

    nextStep() {
        this.parent.propertyAddress = this.AddressData.get('streetAddress').value;
        this.parent.propertyCity = this.AddressData.get('city').value;
        this.parent.propertyState = this.AddressData.get('state').value;
        this.parent.propertyZip = this.AddressData.get('zip').value;
        this.parent.propertyCountry = this.AddressData.get('country').value;
        this.parent.propertyTitle = this.LocationData.get('name').value;
        this.parent.locationDescription = this.LocationData.get('description').value;
        this.parent.locationType = this.LocationData.get('type').value;
        this.parent.deposit = this.LocationData.get('deposit').value;
        this.parent.ratePerDay = this.LocationData.get('rate').value;
        this.parent.numBathrooms = this.numBathrooms;
        this.parent.electricity = this.electricity;
        this.parent.numParking = this.numParking;
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

    electricityTrue() {
      this.electricity = true;
      document.getElementById('trueBtn').style.background = '#32b9d7';
      document.getElementById('falseBtn').style.background = '#828282';
    }

    electricityFalse() {
        this.electricity = false;
        document.getElementById('trueBtn').style.background = '#828282';
        document.getElementById('falseBtn').style.background = '#32b9d7';
    }
}

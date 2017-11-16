import {Component, EventEmitter, Host, OnInit, Output, OnDestroy, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadComponent} from '../upload.component';
import {document} from 'ngx-bootstrap/utils/facade/browser';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit, OnDestroy, OnChanges {
    get numBathrooms(): number {
        return this._numBathrooms;
    }

    set numBathrooms(value: number) {
        this._numBathrooms = value;
    }
    get numParking(): number {
        return this._numParking;
    }

    set numParking(value: number) {
        this._numParking = value;
    }

  // Jason and Lili
    private addr = '';
    private city = '';
    private state = '';
    private zip = '';
    private country = '';
    private propertyTitle = '';
    private locationType = '';
    private locationDescription = '';
    private _numBathrooms = 0;
    private _numParking = 0;
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

  constructor(@Host() private parent: UploadComponent, private uploadService: UploadService) {

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

      if (this.uploadService.NewLocation.address)    {
          this.AddressData.get('streetAddress').setValue(this.uploadService.NewLocation.address.streetAddress);
          this.AddressData.get('city').setValue(this.uploadService.NewLocation.address.city);
          this.AddressData.get('state').setValue(this.uploadService.NewLocation.address.state);
          this.AddressData.get('zip').setValue(this.uploadService.NewLocation.address.zip);
          this.AddressData.get('country').setValue(this.uploadService.NewLocation.address.country);
      }


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
      if (this.uploadService.NewLocation.address)   {
          this.uploadService.NewLocation.address.streetAddress = this.AddressData.get('streetAddress').value;
          this.uploadService.NewLocation.address.city = this.AddressData.get('city').value;
          this.uploadService.NewLocation.address.state = this.AddressData.get('state').value;
          this.uploadService.NewLocation.address.zip = this.AddressData.get('zip').value;
          this.uploadService.NewLocation.address.country = this.AddressData.get('country').value;
          this.uploadService.NewLocation.name = this.LocationData.get('name').value;
          this.uploadService.NewLocation.description = this.LocationData.get('description').value;
          this.uploadService.NewLocation.type = this.LocationData.get('type').value;
          this.uploadService.NewLocation.deposit = this.LocationData.get('deposit').value;
          this.uploadService.NewLocation.rate = this.LocationData.get('rate').value;
          this.uploadService.NewLocation.bathrooms = this._numBathrooms;
          this.uploadService.NewLocation.electricity = this.electricity;
          this.uploadService.NewLocation.parkingSpots = this._numParking;
      }
    }

    incrementBathroom() {
      ++this._numBathrooms;
    }

    decrementBathroom() {
        if (this._numBathrooms >= 1) {
            --this._numBathrooms;
        }
    }

    incrementParking() {
        ++this._numParking;
    }

    decrementParking() {
        if (this._numParking >= 1) {
            --this._numParking;
        }
    }

    electricityTrue() {
      this.electricity = true;
      document.getElementById('trueBtn').style.background = '#39cc61';
      document.getElementById('falseBtn').style.background = '#828282';
    }

    electricityFalse() {
        this.electricity = false;
        document.getElementById('trueBtn').style.background = '#828282';
        document.getElementById('falseBtn').style.background = '#cc0f15';
    }
}

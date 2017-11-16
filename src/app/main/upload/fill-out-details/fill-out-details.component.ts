import {Component, EventEmitter, Host, OnInit, Output, OnDestroy, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadComponent} from '../upload.component';
import {document} from 'ngx-bootstrap/utils/facade/browser';
import {UploadService} from '../upload.service';
import {Location} from '../../../ts models/location.model';

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
    private numBathrooms: number;
    private numParking: number ;
    private electricity: boolean ;
    private deposit: number ;

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


      this.LocationData.get('name').setValue(this.uploadService.NewLocation.name);
      this.LocationData.get('description').setValue(this.uploadService.NewLocation.description);
      this.LocationData.get('type').setValue(this.uploadService.NewLocation.type);
      // this.LocationData.get('deposit').setValue(this.deposit.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      // this.LocationData.get('rate').setValue(this.ratePerDay.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      this.LocationData.get('deposit').setValue(this.uploadService.NewLocation.deposit);
      this.LocationData.get('rate').setValue(this.uploadService.NewLocation.rate);
      this.DetailsData.get('bathrooms').setValue(this.uploadService.NewLocation.bathrooms);
      this.DetailsData.get('parking').setValue(this.uploadService.NewLocation.parkingSpots);
      this.DetailsData.get('electricity').setValue(this.uploadService.NewLocation.electricity);


      this.uploadService.ChangeEmitter.distinctUntilChanged().subscribe(value => {
          if (value.ID !== (2 || 10)) {
              const location = value.location;
              if (location.address) {
                  this.AddressData.get('streetAddress').setValue(location.address.streetAddress);
                  this.AddressData.get('city').setValue(location.address.city);
                  this.AddressData.get('state').setValue(location.address.state);
                  this.AddressData.get('zip').setValue(location.address.zip);
                  this.AddressData.get('country').setValue(location.address.country);
              }
              if (location) {
                  this.LocationData.get('name').setValue(location.name);
                  this.LocationData.get('description').setValue(location.description);
                  this.LocationData.get('type').setValue(location.type);
                  this.LocationData.get('deposit').setValue(location.deposit);
                  this.LocationData.get('rate').setValue(location.rate);
                  this.DetailsData.get('bathrooms').setValue(location.bathrooms);
                  this.DetailsData.get('parking').setValue(location.parkingSpots);
                  this.DetailsData.get('electricity').setValue(location.electricity);
              }
          }
      });
    this.emitChanges();

  }

  emitChanges() {
      this.AddressData.get('streetAddress').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.address.streetAddress = value;
          this.uploadService.emitChanges(2);
      });
      this.AddressData.get('city').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.address.city = value;
          this.uploadService.emitChanges(2);
      });
      this.AddressData.get('state').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.address.state = value;
          this.uploadService.emitChanges(2);
      });
      this.AddressData.get('zip').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.address.zip = value;
          this.uploadService.emitChanges(2);
      });
      this.AddressData.get('country').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.address.country = value;
          this.uploadService.emitChanges(2);
      });
      this.LocationData.get('name').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.name = value;
          this.uploadService.emitChanges(10);
      });
      this.LocationData.get('type').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.type = value;
          this.uploadService.emitChanges(10);
      });
      this.LocationData.get('rate').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.rate = value;
          this.uploadService.emitChanges(10);
      });
      this.LocationData.get('deposit').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.deposit = value;
          this.uploadService.emitChanges(10);
      });
      this.LocationData.get('description').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.description = value;
          this.uploadService.emitChanges(10);
      });
      this.DetailsData.get('electricity').valueChanges.subscribe(value => {
          this.uploadService.NewLocation.electricity = value;
          this.uploadService.emitChanges(10);
      });
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
          this.uploadService.NewLocation.bathrooms = this.numBathrooms;
          this.uploadService.NewLocation.electricity = this.electricity;
          this.uploadService.NewLocation.parkingSpots = this.numParking;
      }
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

import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from '../upload.service';


@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {

    @Output() nextClick = new EventEmitter();

    // DETAIL VALUES
    BathroomValue = -1; //
    ElectricityValue = false; //
    CarValue = -1; //
    TruckValue = -1; //
    RateValue = -1; //
    DepositValue = -1; //
    WifiValue = false; //
    ACValue = false; //
    SoftValue = false; //
    WindowValue = -1;
    SoundValue = -1;
    MaxValue = -1;



    // NG STYLE VARIABLES FOR NEXT BUTTON
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';

  constructor(private fb: FormBuilder, private uploadService: UploadService) { }

    ngOnInit() {
    }

    // BATHROOM FUNCTIONS
    increaseBathroom()  {
        if (this.BathroomValue < 10) {
            this.BathroomValue++;
        }
        this.setValid();
        this.updateNewLocation();
    }
    decreaseBathroom()  {
        if (this.BathroomValue > 0)  {
            this.BathroomValue--;
        }
        this.setValid();
        this.updateNewLocation();
    }
    // CAR FUNCTIONS
    increaseCar()    {
        this.CarValue++;
        this.setValid();
        this.updateNewLocation();
    }
    decreaseCar()   {
        if (this.CarValue > 0)  {
            this.CarValue--;
        }
        this.setValid();
        this.updateNewLocation();
    }
    // TRUCK FUNCTIONS
    increaseTruck() {
        this.TruckValue++;
        this.setValid();
        this.updateNewLocation();

    }
    decreaseTruck() {
        if (this.TruckValue > 0)    {
            this.TruckValue--;
        }
        this.setValid();
        this.updateNewLocation();

    }
    // RATE FUNCTIONS
    increaseRate()  {
        if (this.RateValue < 0)   {
            this.RateValue = 25;
        }   else {
            this.RateValue += 25;
        }
        this.setValid();
        this.updateNewLocation();

    }
    decreaseRate()  {
        if ( this.RateValue  >= 25)   {
            this.RateValue -= 25;
        }
        this.setValid();
        this.updateNewLocation();

    }
    // DEPOSIT FUNCTIONS
    increaseDeposit()   {
        if (this.DepositValue < 0)  {
            this.DepositValue = 25;
        }   else {
            this.DepositValue += 25;
        }
        this.setValid();
        this.updateNewLocation();

    }
    decreaseDeposit()   {
        if (this.DepositValue >= 25)    {
            this.DepositValue -= 25;
        }
        this.setValid();
        this.updateNewLocation();

    }
    // MAX PEOPLE
    increaseMax()   {
      this.MaxValue++;
      this.setValid();
    }
    decreaseMax()   {
      if (this.MaxValue > 0)    {
          this.MaxValue--;
      }
    }
    // SOUND QUALITY
    increaseSound()   {
        if (this.SoundValue < 6)    {
            this.SoundValue++;
        }
    }
    decreaseSound()   {
        if (this.SoundValue > 0)    {
            this.SoundValue--;
        }
    }
    // NATURAL LIGHT
    increaseLight()  {
      if (this.WindowValue < 11) {
          this.WindowValue++;
      }
    }
    decreaseLight() {
      if (this.WindowValue > 0) {
          this.WindowValue--;
      }
    }
    // TOGGLE FUNCTIONS
    toggleWifi()    {
      this.WifiValue = !this.WifiValue;
        this.updateNewLocation();
    }
    toggleAC()  {
      this.ACValue = !this.ACValue;
        this.updateNewLocation();
    }
    toggleSoft()    {
      this.SoftValue = !this.SoftValue;
        this.updateNewLocation();

    }
    toggleElectricity() {
        this.ElectricityValue = !this.ElectricityValue;
        this.updateNewLocation();
    }


    isValid()   {
        if (
            this.BathroomValue >= 0 &&
            this.TruckValue >= 0 &&
            this.CarValue >= 0
            // this.MaxValue *
            // this.SoundValue *
            // this.WindowValue;
        ) {
            return true;
        }
    }
    setValid()  {
      if (this.isValid()) {
              this.color = '#7acc85';
              this.textcolor = 'white';
              this.cursor = 'pointer';
      }
    }

    updateNewLocation() {
        this.uploadService.NewLocation.bathrooms = this.BathroomValue;
        this.uploadService.NewLocation.electricity = this.ElectricityValue;
        this.uploadService.NewLocation.carParking = this.CarValue;
        this.uploadService.NewLocation.truckParking = this.TruckValue;
        this.uploadService.NewLocation.deposit = this.DepositValue;
        this.uploadService.NewLocation.rate = this.RateValue;
        this.uploadService.NewLocation.windows = this.WindowValue;
        this.uploadService.NewLocation.wifi = this.WifiValue;
        this.uploadService.NewLocation.softwrap = this.SoftValue;
        this.uploadService.NewLocation.ac = this.ACValue;
        this.uploadService.NewLocation.soundQuality = this.SoundValue;
        this.uploadService.NewLocation.maxPeople = this.MaxValue;

    }
    submit() {
        if (this.isValid()) {
           this.updateNewLocation();
           this.nextClick.emit();
        }   else {
            console.log('Not Ready');
        }
    }
}

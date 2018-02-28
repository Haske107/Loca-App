import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit {

    DetailsForm: FormGroup;
    @Output() nextClick = new EventEmitter();

    Types = [
        'House',
        'Office',
        'Apartment',
        'Park',
        'Chapman',
        'Bar',
        'School',
        'Street',
        'Hotel',
        'Cafe',
        'Theatre',
        'Studio',
        'University'
    ];

    // NG STYLE VARIABLES
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';

    // DETAIL VALUES
    BathroomValue = -1;
    ElectricityValue = false;
    CarValue = -1;
    TruckValue = -1;
    RateValue = -1;
    DepositValue = -1;

    constructor(private fb: FormBuilder, private uploadService: UploadService) {}

    ngOnInit() {
        this.DetailsForm = this.fb.group({
            Name: [, Validators.required],
            Type: [, Validators.required],
            Description: [],
            Bathrooms: [],
            Electricity: [],
            CarParking: [],
            TruckParking: [],
            Deposit: [],
            Rate: [],
        });
    }

    onChange()  {
        if (this.DetailsForm.valid) {
            this.color = '#7acc85';
            this.textcolor = 'white';
            this.cursor = 'pointer';
        }
    }

    // TYPE SELECT
    selectType(type: string)    {
        this.DetailsForm.value.Type = type;
        console.log(type);
    }
    // BATHROOM FUNCTIONS
    increaseBathroom()  {
        if (this.BathroomValue < 10) {
            this.BathroomValue++;
        }
        this.DetailsForm.value.Bathrooms = this.BathroomValue;
    }
    decreaseBathroom()  {
        if (this.BathroomValue > 0)  {
            this.BathroomValue--;
        }
        this.DetailsForm.value.Bathrooms = this.BathroomValue;
    }

    // ELECTRCITY FUNCTION
    toggleElectricity() {
        this.ElectricityValue = !this.ElectricityValue;
        this.DetailsForm.value.Electricity = this.ElectricityValue;
    }

    // CAR FUNCTIONS
    increaseCar()    {
        this.CarValue++;
        this.DetailsForm.value.carParking = this.CarValue;

    }
    decreaseCar()   {
        if (this.CarValue > 0)  {
            this.CarValue--;
        }
        this.DetailsForm.value.carParking = this.CarValue;

    }
    // TRUCK FUNCTIONS
    increaseTruck() {
        this.TruckValue++;
        this.DetailsForm.value.truckParking = this.TruckValue;

    }
    decreaseTruck() {
        if (this.TruckValue > 0)    {
            this.TruckValue--;
        }
        this.DetailsForm.value.truckParking = this.TruckValue;
    }

    // RATE FUNCTIONS
    increaseRate()  {
        if (this.RateValue < 0)   {
            this.RateValue = 25;
        }   else {
            this.RateValue += 25;
        }
        this.DetailsForm.value.Rate = this.RateValue;

    }
    decreaseRate()  {
        if ( this.RateValue  >= 25)   {
            this.RateValue -= 25;
        }
        this.DetailsForm.value.Rate = this.RateValue;
    }
    // DEPOSIT FUNCTIONS
    increaseDeposit()   {
        if (this.DepositValue < 0)  {
            this.DepositValue = 25;
        }   else {
            this.DepositValue += 25;
        }
        this.DetailsForm.value.Deposit = this.DepositValue;
    }
    decreaseDeposit()   {
        if (this.DepositValue >= 25)    {
            this.DepositValue -= 25;
        }
        this.DetailsForm.value.Deposit = this.DepositValue;
    }

    submit(event) {
        if (this.DetailsForm.valid) {
            this.uploadService.NewLocation.name = this.DetailsForm.value.Name;
            this.uploadService.NewLocation.type = this.DetailsForm.value.Type;
            this.uploadService.NewLocation.description = this.DetailsForm.value.Description;
            this.uploadService.NewLocation.bathrooms = this.DetailsForm.value.Bathrooms;
            this.uploadService.NewLocation.electricity = this.DetailsForm.value.Electricity;
            this.uploadService.NewLocation.carParking = this.DetailsForm.value.CarParking;
            this.uploadService.NewLocation.truckParking = this.DetailsForm.value.TruckParking;
            this.uploadService.NewLocation.deposit = this.DetailsForm.value.Deposit;
            this.uploadService.NewLocation.rate = this.DetailsForm.value.Rate;
            this.DetailsForm.reset();
            this.nextClick.emit();
            console.log(this.uploadService.NewLocation);
        }   else {
            console.log("Not Ready");
        }
    }

    changeToReadyState(elementID: string)    {

    }
}

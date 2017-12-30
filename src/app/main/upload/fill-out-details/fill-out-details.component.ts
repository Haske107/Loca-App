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
        'Business',
        'Apartment',
        'Park',
        'Bar',
        'School'
    ];

    // NG STYLE VARIABLES
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';

    constructor(private fb: FormBuilder, private uploadService: UploadService) {}

    ngOnInit() {
        this.DetailsForm = this.fb.group({
            Name: [, Validators.required],
            Type: [, Validators.required],
            Description: [, Validators.required],
            Bathrooms: [, Validators.required],
            Electricity: [, Validators.required],
            Parking: [, Validators.required],
            Deposit: [, Validators.required],
            Rate: [, Validators.required],
        });
    }

    onChange()  {
        if (this.DetailsForm.valid) {
            this.color = '#7acc85';
            this.textcolor = 'white';
            this.cursor = 'pointer';
        }
    }

    submit(event) {
        if (this.DetailsForm.valid) {
            this.uploadService.NewLocation.name = this.DetailsForm.value.Name;
            this.uploadService.NewLocation.type = this.DetailsForm.value.Type;
            this.uploadService.NewLocation.description = this.DetailsForm.value.Description;
            this.uploadService.NewLocation.bathrooms = this.DetailsForm.value.Bathrooms;
            this.uploadService.NewLocation.electricity = this.DetailsForm.value.Electricity;
            this.uploadService.NewLocation.parkingSpots = this.DetailsForm.value.Parking;
            this.uploadService.NewLocation.deposit = this.DetailsForm.value.Deposit;
            this.uploadService.NewLocation.rate = this.DetailsForm.value.Rate;
            this.DetailsForm.reset();
            this.nextClick.emit();
            console.log(this.uploadService.NewLocation);
        }   else {
            console.log("Not Ready");
        }
    }
}

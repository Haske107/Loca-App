import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit {

    DetailsForm: FormGroup;
    @Output() nextClick = new EventEmitter();


    Rules = ['', '', '', '', ''];

    Types = [
        'House',
        'Office',
        'Apartment',
        'Park',
        'Chapman',
        'Bar',
        'School',
        'Restaurant',
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


    constructor(private fb: FormBuilder, private uploadService: UploadService) {}

    ngOnInit() {
        this.DetailsForm = this.fb.group({
            Name: [, Validators.required],
            Description: [, Validators.required],
            Type: [, Validators.required],
        });
    }

    onChange()  {
        if (this.DetailsForm.valid) {
            this.color = '#7acc85';
            this.textcolor = 'white';
            this.cursor = 'pointer';
        }
    }

    submit()    {
        //this.nextClick.emit();
    }
}

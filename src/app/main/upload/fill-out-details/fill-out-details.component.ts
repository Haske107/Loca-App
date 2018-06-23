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
            Rules: [, ]
        });
    }

    onChange()  {
        //  UPDATE TEMP LOCATION
        this.uploadService.NewLocation.name = this.DetailsForm.value.Name;
        this.uploadService.NewLocation.description = this.DetailsForm.value.Description;
        this.uploadService.NewLocation.type = this.DetailsForm.value.Type;
        this.uploadService.NewLocation.rules = this.filterEmptyRules();

        // CHECK FOR VALIDITY
        if (this.DetailsForm.valid) {
            this.color = '#7acc85';
            this.textcolor = 'white';
            this.cursor = 'pointer';
        }

        // EMIT CHANGES
        this.uploadService.emitChanges(2);

    }


    submit()    {
        if (this.DetailsForm.valid) {
            this.DetailsForm.value.Rules = this.filterEmptyRules();
            this.nextClick.emit();
        }
    }

    trackByFn(index, item) {
        return index; // or item.id
    }

    removeRule(i: number)   {
        this.onChange();
        this.Rules.splice(i, 1);
        this.DetailsForm.value.Rules = this.Rules;
    }

    selectType(Type: String)    {
        this.onChange();
        this.Types.forEach(type =>  {
            if (Type === type)  {
                this.DetailsForm.value.Type = Type;
            }
        });
    }

    filterEmptyRules()  {
        const NewRules = [];
        for (let i = 0; i < this.Rules.length; i++)   {
            if (this.Rules[i] !== '')   {
                NewRules.push(this.Rules[i]);
            }
        }
        return NewRules;
    }
}

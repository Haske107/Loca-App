import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fill-out-details',
  templateUrl: './fill-out-details.component.html',
  styleUrls: ['./fill-out-details.component.scss']
})
export class FillOutDetailsComponent implements OnInit {

  // Jason and Lili

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

  constructor() { }

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
  }
}

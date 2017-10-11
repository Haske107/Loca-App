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
  RulesArray: string[] = ['Shoes off inside','No photos or videos'];
    Types = [
        {value: 'Home'},
        {value: 'Business'},
        {value: 'Studio'},
        {value: 'Park'},
        {value: 'School'},
        {value: 'Public Space'}
    ];

  constructor() { }
  // TODO: get location info from the first step (verify location) and fill fields
  // TODO: press next button = pass location to upload photo - submit UNTIL review-and-submit
  ngOnInit() {

      this.LocationData = new FormGroup({
          streetAddress: new FormControl(null, Validators.required),
          city: new FormControl(null , Validators.required),
          state: new FormControl(null , Validators.required),
          zip: new FormControl(null , Validators.required),
          country: new FormControl(null , Validators.required),
          name: new FormControl(null , Validators.required),
          description: new FormControl(null , Validators.required),
          rules: new FormControl(this.RulesArray),
          deposit: new FormControl(null , Validators.required),
          rate: new FormControl(null , Validators.required),
          type: new FormControl(null , Validators.required),
          bathrooms: new FormControl(null , Validators.required),
          electricity: new FormControl(null , Validators.required),
          parking: new FormControl(null , Validators.required),
      });
  }
  addRule() {
      this.RulesArray.push('');
      console.log(this.RulesArray);
  }

  removeRule()  {
      if (this.RulesArray.length > 1) {
          this.RulesArray.pop();
      }
  }

  customTrackBy(index: number, obj: any): any {
      return index;
  }

}

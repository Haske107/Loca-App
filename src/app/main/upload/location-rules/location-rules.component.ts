import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-location-rules',
    templateUrl: './location-rules.component.html',
    styleUrls: ['./location-rules.component.scss']
})
export class LocationRulesComponent implements OnInit {

    RulesData: FormGroup;
    RulesArray: string[] = ['Shoes off inside', 'No photos or videos'];

    constructor() { }
    // TODO: get location info from the first step (verify location) and fill fields
    // TODO: press next button = pass location to upload photo - submit UNTIL review-and-submit
    ngOnInit() {

        this.RulesData = new FormGroup({
            rules: new FormControl(this.RulesArray),
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
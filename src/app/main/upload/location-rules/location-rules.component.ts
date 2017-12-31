import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from "../upload.service";
import {LocationService} from "../../../services/location.service";

@Component({
    selector: 'app-location-rules',
    templateUrl: './location-rules.component.html',
    styleUrls: ['./location-rules.component.scss']
})
export class LocationRulesComponent implements OnInit {

    RulesData: FormGroup;
    RulesArray: string[] = ['Shoes off inside'];
    @Output() nextClick = new EventEmitter();

    // NG STYLE VARIABLES
    height = '0px';
    color = '#7acc85';
    textcolor = 'white';
    cursor = 'pointer';

    constructor(private uploadService: UploadService, private locationService: LocationService) { }
    ngOnInit() {
        this.RulesData = new FormGroup({
            rules: new FormControl(this.RulesArray),
        });
    }
    addRule() {
        this.RulesArray.push('');
        console.log(this.RulesArray);
    }
    removeRule(i )  {
        for (i ; i < this.RulesArray.length - 1; i++)    {
            this.RulesArray[i] = this.RulesArray[i + 1];
        }
        this.RulesArray.pop();
    }
    customTrackBy(index: number, obj: any): any {
        return index;
    }
    submit()    {
        this.uploadService.NewLocation.rules = this.RulesArray;
        this.nextClick.emit();
    }
}

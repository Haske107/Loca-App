/**
 * Created by Jeff Haskell on 7/10/2017.
 */


import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {LocationService} from '../../services/location.service';

@Component({
    selector: 'upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.css'],
})

export class UploadComponent implements OnInit {

    locationID = '';
    state = 0;

    propertyAddress = '';
    propertyZip = '';
    propertyCity = '';
    propertyState = '';
    propertyCountry = '';


    // from upload component
    propertyTitle = '';
    locationType = '';
    locationDescription = '';
    numBathrooms = 0;
    numParking = 0;
    electricity = false;
    deposit = 0.0;
    ratePerDay = 0.0;

    // from rules component
    rulesArr = [];


    constructor(private authService: AuthService, private router: Router, private snackBar: MdSnackBar)   {


    }

    ngOnInit()  {

    }

    setID(ID: string){
      this.locationID = ID;
      this.state = 1;
    }
}

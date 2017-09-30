/**
 * Created by Jeff Haskell on 7/10/2017.
 */


import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {LocationService} from '../../services/location.service';

@Component({
    selector: 'upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.css'],
})

export class UploadComponent implements OnInit {

    locationID = '';
    state = 0;

    constructor(private authService: AuthService, private router: Router, private snackBar: MdSnackBar)   {

    }

    ngOnInit()  {

    }
    setID(ID: string){
      this.locationID = ID;
      this.state = 1;
    }
}

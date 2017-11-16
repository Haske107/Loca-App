/**
 * Created by Jeff Haskell on 7/10/2017.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '../../ts models/location.model';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {UploadService} from "./upload.service";

@Component({
    selector: 'app-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.css'],
})

export class UploadComponent implements OnInit {

    @ViewChild('stepper') stepper;


    constructor(private authService: AuthService, private uploadService: UploadService)   {

    }

    ngOnInit()  {

    }

}

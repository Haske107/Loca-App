/**
 * Created by Jeff Haskell on 7/10/2017.
 */
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from '../../ts models/location.model';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {UploadService} from "./upload.service";
import {FileService} from "../../services/file.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PageStateService} from "../../services/page.state.service";

@Component({
    selector: 'app-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.css'],
})

export class UploadComponent implements OnInit, OnDestroy   {

    @ViewChild('FODInput') FODInput;
    @ViewChild('stepper') stepper;
    @ViewChild('FOD') FillOutDetails;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private authService: AuthService,
                private router: Router,
                private fileService: FileService,
                private uploadService: UploadService,
                private _formBuilder: FormBuilder,
                private pageStateService: PageStateService
                )   {
        this.pageStateService.Upload = true;
        console.log(this.pageStateService.Upload);


    }

    ngOnInit()  {
        // if (!this.authService.isAuthenticated()) {
        //     this.router.navigateByUrl('/main');
        // }
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });

    }

    ngOnDestroy()   {
        this.pageStateService.Upload = false;
        console.log(this.pageStateService.Upload);
    }


    FODNext()   {
        this.FODInput.invalid = false;
        this.stepper.next();
    }

    uploadFiles() {
        if (this.uploadService.Photos.length > 0) {
            const formData = new FormData();
            const FileList = this.uploadService.Photos;
            FileList.forEach(file =>  {
                formData.append('photo', file);
            });
            this.fileService.uploadPhoto(this.uploadService.NewLocation._id, formData)
                .subscribe(
                    data => {
                        console.log(data);
                    },
                    error => {
                        console.error(error);
                    }
                );
        }
    }

}

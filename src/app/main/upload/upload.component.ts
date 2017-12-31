/**
 * Created by Jeff Haskell on 7/10/2017.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '../../ts models/location.model';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {UploadService} from "./upload.service";
import {FileService} from "../../services/file.service";

@Component({
    selector: 'app-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.css'],
})

export class UploadComponent implements OnInit {

    @ViewChild('stepper') stepper;


    constructor(private authService: AuthService,
                private router: Router,
                private fileService: FileService,
                private uploadService: UploadService
                )   {

    }

    ngOnInit()  {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/main');
        }

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

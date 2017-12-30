import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../../../services/file.service';
import {Location} from '../../../ts models/location.model';
import {UploadService} from '../upload.service';
import {Url} from 'url';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})

export class UploadPhotosComponent implements OnInit {

    // NG STYLE VARIABLES
    textcolor = 'lightgrey';
    color = 'grey';
    cursor = 'not-allowed';
    height = '0px';
    IconColor = '#7cc3d4';
    XOpacity = 0;

    // GAIN LIVE ACCESS TO THE HTML FILE INPUT ELEMENT
    @ViewChild('FileInput') _FileInput;
    @ViewChild('Remove') RemoveButton;

    // LOCAL PREVIEW LINK
    public url: Url[] = [];
    public files: any[] = [];

    constructor(private fileService: FileService, private uploadService: UploadService) { }

    ngOnInit() {

    }

    onDrop(event: any) {
        event.stopPropagation();
        event.preventDefault();
        for (const file of event.dataTransfer.files) {
            this.files.push(file);
            const reader = new FileReader();
            reader.onload = (_event: any) => {
                this.url.push(_event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    allowDrop(event) {
        event.preventDefault();
        //  CHECK FOR VALID FILE
            // IF VALID MAKE GREEN AND CHANGE CURSOR
            // ELSE MAKE RED AND CHANGE CURSOR
    }

    selectFile(event)  {
        console.log(event);
        event.preventDefault();
        event.stopPropagation();
        for (const file of event.target.files)  {
            this.files.push(file);
            const reader = new FileReader();
            reader.onload = (_event: any) => {
                this.url.push(_event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    onHover()   {
        this.IconColor = '#3594ab';
    }


    onLeave()   {
        this.IconColor = '#7cc3d4';
    }


    uploadFile() {
        if (this.files.length > 0) {
            const formData = new FormData();
            const FileList = this.files;
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
